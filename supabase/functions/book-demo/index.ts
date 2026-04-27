// Books a demo: validates input, ensures the slot is still free,
// inserts a row in demo_requests, then creates a Google Calendar event
// with a Google Meet link and the visitor as an attendee.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";
const TIMEZONE = "Europe/Warsaw";
const SLOT_MINUTES = 30;
const NOTIFY_EMAIL = "info@quantummaking.com";

interface BookingPayload {
  name: string;
  email: string;
  company: string;
  notes?: string;
  slotIso: string; // UTC ISO string from the slots endpoint
  language?: string;
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function validate(body: unknown): { ok: true; data: BookingPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid body" };
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const company = typeof b.company === "string" ? b.company.trim() : "";
  const notes = typeof b.notes === "string" ? b.notes.trim() : undefined;
  const slotIso = typeof b.slotIso === "string" ? b.slotIso.trim() : "";
  const language = typeof b.language === "string" ? b.language.trim().slice(0, 8) : undefined;

  if (name.length < 1 || name.length > 200) return { ok: false, error: "Invalid name" };
  if (!isValidEmail(email) || email.length > 320) return { ok: false, error: "Invalid email" };
  if (company.length < 1 || company.length > 200) return { ok: false, error: "Invalid company" };
  if (notes && notes.length > 2000) return { ok: false, error: "Notes too long" };

  const slotDate = new Date(slotIso);
  if (Number.isNaN(slotDate.getTime())) return { ok: false, error: "Invalid slotIso" };
  if (slotDate.getTime() < Date.now() + 60 * 60 * 1000) {
    return { ok: false, error: "Slot is too soon" };
  }

  return { ok: true, data: { name, email, company, notes, slotIso, language } };
}

async function ensureSlotFree(slotStart: Date, slotEnd: Date): Promise<boolean> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
  const GOOGLE_CALENDAR_API_KEY = Deno.env.get("GOOGLE_CALENDAR_API_KEY")!;
  const res = await fetch(`${GATEWAY_URL}/freeBusy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_CALENDAR_API_KEY,
    },
    body: JSON.stringify({
      timeMin: slotStart.toISOString(),
      timeMax: slotEnd.toISOString(),
      timeZone: TIMEZONE,
      items: [{ id: "primary" }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`freeBusy failed: ${JSON.stringify(data)}`);
  const busy = data?.calendars?.primary?.busy ?? [];
  return busy.length === 0;
}

async function createEvent(opts: {
  start: Date;
  end: Date;
  name: string;
  email: string;
  company: string;
  notes?: string;
}): Promise<{ htmlLink?: string; meetUrl?: string; eventId?: string }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
  const GOOGLE_CALENDAR_API_KEY = Deno.env.get("GOOGLE_CALENDAR_API_KEY")!;

  const summary = `Quantum demo — ${opts.company} (${opts.name})`;
  const description = [
    `Quantum product demo with ${opts.name} from ${opts.company}.`,
    `Visitor email: ${opts.email}`,
    opts.notes ? `\nVisitor notes:\n${opts.notes}` : "",
    `\nBooked via quantummaking.com.`,
  ].join("\n");

  const requestId = crypto.randomUUID();
  const url = `${GATEWAY_URL}/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_CALENDAR_API_KEY,
    },
    body: JSON.stringify({
      summary,
      description,
      start: { dateTime: opts.start.toISOString(), timeZone: TIMEZONE },
      end: { dateTime: opts.end.toISOString(), timeZone: TIMEZONE },
      attendees: [
        { email: opts.email, displayName: opts.name },
        { email: NOTIFY_EMAIL },
      ],
      conferenceData: {
        createRequest: {
          requestId,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: { useDefault: true },
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Calendar event create failed [${res.status}]: ${JSON.stringify(data)}`);
  }

  const meetEntry = (data.conferenceData?.entryPoints ?? []).find(
    (e: { entryPointType?: string; uri?: string }) => e.entryPointType === "video",
  );

  return {
    htmlLink: data.htmlLink,
    meetUrl: meetEntry?.uri,
    eventId: data.id,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const json = await req.json().catch(() => null);
    const parsed = validate(json);
    if (!parsed.ok) {
      return new Response(JSON.stringify({ error: parsed.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { name, email, company, notes, slotIso, language } = parsed.data;

    const slotStart = new Date(slotIso);
    const slotEnd = new Date(slotStart.getTime() + SLOT_MINUTES * 60 * 1000);

    // Re-check slot is still free (best-effort race protection).
    const free = await ensureSlotFree(slotStart, slotEnd);
    if (!free) {
      return new Response(
        JSON.stringify({ error: "slot_taken", message: "That time was just booked. Please pick another slot." }),
        {
          status: 409,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create the calendar event with a Meet link.
    const event = await createEvent({
      start: slotStart,
      end: slotEnd,
      name,
      email,
      company,
      notes,
    });

    // Persist the demo request (best-effort — even if this fails, the meeting is booked).
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
        const { year, month, day } = (() => {
          const dtf = new Intl.DateTimeFormat("en-CA", {
            timeZone: TIMEZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const parts = dtf.formatToParts(slotStart);
          const m: Record<string, string> = {};
          for (const p of parts) if (p.type !== "literal") m[p.type] = p.value;
          return { year: m.year, month: m.month, day: m.day };
        })();

        await supabase.from("demo_requests").insert({
          name,
          email,
          company,
          // The minimal flow doesn't ask for these; satisfy NOT NULL with placeholders.
          role: "(not provided)",
          industry: "(not provided)",
          site_location: "(not provided)",
          preferred_start_date: `${year}-${month}-${day}`,
          notes: [
            `Booked slot: ${slotStart.toISOString()} (${TIMEZONE})`,
            event.meetUrl ? `Meet: ${event.meetUrl}` : null,
            event.eventId ? `Event ID: ${event.eventId}` : null,
            notes ? `\nVisitor notes:\n${notes}` : null,
          ].filter(Boolean).join("\n"),
          language: language ?? null,
          user_agent: req.headers.get("user-agent") ?? null,
        });
      } catch (insertErr) {
        console.error("demo_requests insert failed (non-fatal):", insertErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        meetUrl: event.meetUrl ?? null,
        eventLink: event.htmlLink ?? null,
        startIso: slotStart.toISOString(),
        endIso: slotEnd.toISOString(),
        timezone: TIMEZONE,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("book-demo error:", message);
    return new Response(
      JSON.stringify({ error: "booking_failed", message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
