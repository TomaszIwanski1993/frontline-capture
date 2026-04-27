import { useEffect, useMemo, useState } from "react";
import { Calendar as CalendarIcon, Clock, Video, Loader2, ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useT } from "@/hooks/useT";
import { useBookDemo } from "@/contexts/BookDemoContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

type Step = "pick" | "details" | "success" | "fallback";

interface SlotsResponse {
  timezone: string;
  slotMinutes: number;
  slotsByDay: Record<string, string[]>; // YYYY-MM-DD -> ISO start times
}

interface BookingResponse {
  success: true;
  meetUrl: string | null;
  eventLink: string | null;
  startIso: string;
  endIso: string;
  timezone: string;
}

const localeFor = (lang: string | null) => (lang === "pl" ? "pl-PL" : "en-US");

const formatDateLong = (iso: string, lang: string | null) =>
  new Date(iso).toLocaleDateString(localeFor(lang), {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const formatTime = (iso: string, lang: string | null) =>
  new Date(iso).toLocaleTimeString(localeFor(lang), { hour: "2-digit", minute: "2-digit" });

const ymdKey = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const BookDemoDialog = () => {
  const t = useT();
  const { language } = useLanguage();
  const { isOpen, closeDialog } = useBookDemo();

  const [step, setStep] = useState<Step>("pick");
  const [slots, setSlots] = useState<SlotsResponse | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const [form, setForm] = useState({ name: "", email: "", company: "", notes: "" });
  const [touched, setTouched] = useState({ name: false, email: false, company: false });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<BookingResponse | null>(null);

  // Reset state on open
  useEffect(() => {
    if (!isOpen) return;
    setStep("pick");
    setSelectedDate(undefined);
    setSelectedSlot(null);
    setForm({ name: "", email: "", company: "", notes: "" });
    setTouched({ name: false, email: false, company: false });
    setSubmitError(null);
    setConfirmed(null);

    let cancelled = false;
    setLoadingSlots(true);
    supabase.functions
      .invoke<SlotsResponse>("get-available-slots", { body: {} })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error || !data) {
          setStep("fallback");
        } else {
          setSlots(data);
          // Auto-select first day with slots
          const firstDay = Object.keys(data.slotsByDay).sort()[0];
          if (firstDay) {
            const [y, m, d] = firstDay.split("-").map(Number);
            setSelectedDate(new Date(y, m - 1, d));
          }
        }
      })
      .catch(() => {
        if (!cancelled) setStep("fallback");
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  const slotsForSelectedDay = useMemo(() => {
    if (!slots || !selectedDate) return [];
    return slots.slotsByDay[ymdKey(selectedDate)] ?? [];
  }, [slots, selectedDate]);

  const availableDays = useMemo(() => {
    if (!slots) return new Set<string>();
    return new Set(Object.keys(slots.slotsByDay));
  }, [slots]);

  const isDayDisabled = (date: Date) => {
    if (!slots) return true;
    return !availableDays.has(ymdKey(date));
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fieldErrors = useMemo(() => {
    const errs: { name?: string; email?: string; company?: string } = {};
    if (form.name.trim().length === 0) errs.name = t.bookDemo.errors.nameRequired;
    const emailTrim = form.email.trim();
    if (emailTrim.length === 0) errs.email = t.bookDemo.errors.emailRequired;
    else if (!emailRe.test(emailTrim)) errs.email = t.bookDemo.errors.emailInvalid;
    if (form.company.trim().length === 0) errs.company = t.bookDemo.errors.companyRequired;
    return errs;
  }, [form, t]);

  const showError = (field: "name" | "email" | "company") =>
    touched[field] && fieldErrors[field] ? fieldErrors[field] : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    // Force-show any remaining errors
    setTouched({ name: true, email: true, company: true });
    if (Object.keys(fieldErrors).length > 0) return;
    setSubmitError(null);
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke<BookingResponse | { error: string }>(
        "book-demo",
        {
          body: {
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            notes: form.notes.trim() || undefined,
            slotIso: selectedSlot,
            language,
          },
        },
      );
      if (error) {
        // Network or 4xx/5xx — try to read message from context
        const ctx = (error as { context?: { error?: string } }).context;
        if (ctx?.error === "slot_taken") {
          setSubmitError(t.bookDemo.slotTaken);
          // Refresh slots
          setSelectedSlot(null);
        } else {
          setSubmitError(t.bookDemo.genericError);
        }
        return;
      }
      if (data && "success" in data && data.success) {
        setConfirmed(data);
        setStep("success");
      } else {
        setSubmitError(t.bookDemo.genericError);
      }
    } catch {
      setSubmitError(t.bookDemo.genericError);
    } finally {
      setSubmitting(false);
    }
  };

  const formValid = Object.keys(fieldErrors).length === 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : closeDialog())}>
      <DialogContent className="max-w-3xl p-0 gap-0 overflow-hidden border-border/60 bg-card">
        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-border/50">
          <DialogTitle className="text-xl font-semibold tracking-tight text-foreground">
            {t.bookDemo.title}
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm text-muted-foreground">
            {t.bookDemo.subtitle}
          </DialogDescription>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {t.bookDemo.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Video className="h-3.5 w-3.5 text-primary" />
              {t.bookDemo.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="h-3.5 w-3.5 text-primary" />
              {t.bookDemo.timezone}
            </span>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === "pick" && (
              <motion.div
                key="pick"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {loadingSlots && (
                  <div className="flex items-center justify-center gap-2 px-7 py-16 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.bookDemo.loading}
                  </div>
                )}

                {!loadingSlots && slots && (
                  <div className="grid md:grid-cols-[auto_1fr] gap-0 md:gap-2">
                    {/* Calendar (left) */}
                    <div className="px-4 md:px-5 pt-5 md:border-r border-border/40">
                      <p className="px-2 text-xs font-semibold text-foreground/80 tracking-[0.14em] uppercase mb-2">
                        {t.bookDemo.pickDate}
                      </p>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(d) => {
                          setSelectedDate(d ?? undefined);
                          setSelectedSlot(null);
                        }}
                        disabled={isDayDisabled}
                        weekStartsOn={1}
                        fromDate={new Date()}
                        className="pointer-events-auto"
                      />
                    </div>

                    {/* Slots (right) */}
                    <div className="px-7 py-5 md:py-5">
                      <p className="text-xs font-semibold text-foreground/80 tracking-[0.14em] uppercase mb-3">
                        {t.bookDemo.pickTime}
                      </p>
                      {!selectedDate && (
                        <p className="text-sm text-muted-foreground py-8">{t.bookDemo.pickDateFirst}</p>
                      )}
                      {selectedDate && (
                        <p className="text-sm text-foreground/85 mb-4 font-medium">
                          {formatDateLong(selectedDate.toISOString(), language)}
                        </p>
                      )}
                      {selectedDate && slotsForSelectedDay.length === 0 && (
                        <p className="text-sm text-muted-foreground">{t.bookDemo.noSlots}</p>
                      )}
                      {selectedDate && slotsForSelectedDay.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
                          {slotsForSelectedDay.map((iso) => {
                            const isSelected = selectedSlot === iso;
                            return (
                              <button
                                key={iso}
                                type="button"
                                onClick={() => setSelectedSlot(iso)}
                                className={cn(
                                  "rounded-md border px-3 py-2.5 text-sm font-medium transition-all",
                                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                                  isSelected
                                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                    : "border-border bg-background hover:border-primary/60 hover:text-foreground text-foreground/80",
                                )}
                                aria-pressed={isSelected}
                              >
                                {formatTime(iso, language)}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      <div className="mt-6 flex justify-end">
                        <Button
                          type="button"
                          disabled={!selectedSlot}
                          onClick={() => setStep("details")}
                          className="cta-button text-sm px-6 py-2.5 disabled:opacity-50"
                        >
                          {t.bookDemo.next}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {step === "details" && selectedSlot && (
              <motion.form
                key="details"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                onSubmit={handleSubmit}
                className="px-7 py-6"
              >
                <button
                  type="button"
                  onClick={() => setStep("pick")}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  {t.bookDemo.back}
                </button>

                <p className="text-xs font-semibold text-foreground/80 tracking-[0.14em] uppercase mb-2">
                  {t.bookDemo.details}
                </p>
                <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-3 mb-5">
                  <p className="text-sm font-medium text-foreground">
                    {formatDateLong(selectedSlot, language)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatTime(selectedSlot, language)} · {t.bookDemo.duration}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bd-name" className="block text-xs font-medium text-foreground mb-1.5">
                      {t.bookDemo.name}
                    </label>
                    <input
                      id="bd-name"
                      type="text"
                      required
                      maxLength={200}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t.bookDemo.namePh}
                      className="w-full px-3.5 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="bd-email" className="block text-xs font-medium text-foreground mb-1.5">
                      {t.bookDemo.email}
                    </label>
                    <input
                      id="bd-email"
                      type="email"
                      required
                      maxLength={320}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t.bookDemo.emailPh}
                      className="w-full px-3.5 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="bd-company" className="block text-xs font-medium text-foreground mb-1.5">
                      {t.bookDemo.company}
                    </label>
                    <input
                      id="bd-company"
                      type="text"
                      required
                      maxLength={200}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder={t.bookDemo.companyPh}
                      className="w-full px-3.5 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="bd-notes" className="block text-xs font-medium text-foreground mb-1.5">
                      {t.bookDemo.notes}
                    </label>
                    <textarea
                      id="bd-notes"
                      maxLength={2000}
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder={t.bookDemo.notesPh}
                      className="w-full px-3.5 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>
                </div>

                {submitError && (
                  <p className="mt-4 text-sm text-destructive">{submitError}</p>
                )}

                <div className="mt-6 flex justify-end">
                  <Button
                    type="submit"
                    disabled={!formValid || submitting}
                    className="cta-button text-sm px-6 py-2.5 disabled:opacity-50 inline-flex items-center gap-2"
                  >
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    {submitting ? t.bookDemo.submitting : t.bookDemo.submit}
                  </Button>
                </div>
              </motion.form>
            )}

            {step === "success" && confirmed && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="px-7 py-10 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t.bookDemo.successTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  {t.bookDemo.successBody}
                </p>
                <div className="mt-5 inline-block rounded-md border border-border bg-secondary px-5 py-3 text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t.bookDemo.successWhen}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {formatDateLong(confirmed.startIso, language)}
                  </p>
                  <p className="text-sm text-foreground/80">
                    {formatTime(confirmed.startIso, language)} – {formatTime(confirmed.endIso, language)}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {confirmed.meetUrl && (
                    <a
                      href={confirmed.meetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button text-sm px-5 py-2.5 inline-flex items-center gap-2"
                    >
                      <Video className="h-4 w-4" />
                      {t.bookDemo.successJoin}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="btn-outline text-sm px-5 py-2.5"
                  >
                    {t.bookDemo.close}
                  </button>
                </div>
              </motion.div>
            )}

            {step === "fallback" && (
              <motion.div
                key="fallback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-7 py-10 text-center"
              >
                <h3 className="text-lg font-semibold text-foreground">{t.bookDemo.fallbackTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  {t.bookDemo.fallbackBody}
                </p>
                <a
                  href="mailto:info@quantummaking.com?subject=Book%20a%20Demo"
                  className="mt-5 cta-button text-sm px-5 py-2.5 inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {t.bookDemo.fallbackEmail}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
