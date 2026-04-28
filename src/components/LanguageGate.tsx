import { useEffect, useState } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";

const TAGLINES = [
  { lang: "en", text: "AI for operational knowledge retention" },
  { lang: "pl", text: "AI do utrzymania wiedzy operacyjnej" },
] as const;

// One full cycle = HOLD + CROSSFADE. Crossfade overlaps both texts so there is
// never an empty moment.
const HOLD_MS = 2600;       // how long a tagline sits fully visible
const CROSSFADE_MS = 520;   // simultaneous fade-out + fade-in duration
const CYCLE_MS = HOLD_MS + CROSSFADE_MS;

const LanguageGate = () => {
  const { hasSelected, setLanguage } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Honor prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Continuous loop — no waiting for animations to finish, no empty gap
  useEffect(() => {
    if (hasSelected) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % TAGLINES.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [hasSelected]);

  if (hasSelected || dismissed) return null;

  const choose = (lang: Language) => setLanguage(lang);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      role="dialog"
      aria-modal="true"
      aria-label="Language selection"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(0, 8, 232, 0.06), transparent 55%), radial-gradient(circle at 70% 75%, rgba(16, 8, 40, 0.05), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full animate-fade-in">
        <Logo
          surface="light"
          variant="full"
          alt="Quantum"
          className="h-28 sm:h-36 w-auto"
        />

        <p className="mt-3 text-foreground/50 text-[11px] sm:text-xs tracking-[0.25em] uppercase">
          Built in Poland
        </p>

        {/* Tagline slot — both languages overlap, opposite crossfade phases.
            There is never an empty frame. */}
        <div
          className="mt-10 relative w-full min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center justify-center px-4"
          aria-live="polite"
        >
          {TAGLINES.map((t, i) => {
            const active = i === activeIndex;
            const transition = reducedMotion
              ? `opacity ${CROSSFADE_MS}ms ease-in-out`
              : `opacity ${CROSSFADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${CROSSFADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            return (
              <p
                key={t.lang}
                lang={t.lang}
                aria-hidden={!active}
                className="absolute inset-0 flex items-center justify-center text-foreground/85 text-base sm:text-lg tracking-wide leading-snug"
                style={{
                  opacity: active ? 1 : 0,
                  transform: reducedMotion
                    ? "none"
                    : active
                      ? "translateY(0)"
                      : "translateY(4px)",
                  transition,
                  willChange: "opacity, transform",
                }}
              >
                {t.text}
              </p>
            );
          })}
        </div>

        <div className="mt-12 mb-6 text-foreground/55 text-xs sm:text-sm tracking-[0.2em] uppercase">
          Choose your language <span className="mx-2 opacity-50">/</span> Wybierz język
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center">
          <button
            onClick={() => choose("en")}
            className="w-full sm:w-44 px-6 py-3.5 border border-foreground/30 text-foreground text-sm tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:border-primary hover:text-primary hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            English
          </button>
          <button
            onClick={() => choose("pl")}
            className="w-full sm:w-44 px-6 py-3.5 border border-foreground/30 text-foreground text-sm tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:border-primary hover:text-primary hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Polski
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageGate;
