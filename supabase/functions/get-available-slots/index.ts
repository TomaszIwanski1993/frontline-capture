// Returns 30-minute slots for the next 30 days, Mon–Fri 09:00–18:00 Europe/Warsaw,
// minus busy times from the connected Google Calendar (primary calendar).

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";

const TIMEZONE = "Europe/Warsaw";
const DAY_START_HOUR = 9; // 09:00 local
const DAY_END_HOUR = 18; // 18:00 local
const SLOT_MINUTES = 30;
const NOTICE_HOURS = 4;
const HORIZON_DAYS = 30;
// Calendar that owns the demo events. Must be shared with the connected
// Google account (read access is enough for freeBusy).
const TARGET_CALENDAR_ID = "tomasz.iwanski@quantummaking.com";

// Get the UTC offset in minutes for a given UTC instant in a named timezone.
function getTimezoneOffsetMinutes(utcDate: Date, timeZone: string): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = dtf.formatToParts(utcDate);
  const map: Record<string, string> = {};
  for (const p of parts) if (p.type !== "literal") map[p.type] = p.value;
  // Build the local wall clock as if it were UTC, then subtract the real UTC instant.
  const asUTC = Date.UTC(
    Number(map.year),
    Number(map.month) - 1,
    Number(map.day),
    Number(map.hour) === 24 ? 0 : Number(map.hour),
    Number(map.minute),
    Number(map.second),
  );
  return Math.round((asUTC - utcDate.getTime()) / 60000);
}

// Build a UTC Date that represents the given local wall-clock time in `timeZone`.
function utcFromLocal(year: number, month: number, day: number, hour: number, minute: number, timeZone: string): Date {
  // Initial guess: treat the wall clock as UTC.
  const guess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  // Compute the offset that the timezone has at that instant, then correct.
  const offset = getTimezoneOffsetMinutes(guess, timeZone);
  return new Date(guess.getTime() - offset * 60000);
}

// Returns weekday in the given timezone for a UTC Date. 0=Sun..6=Sat.
function localWeekday(utcDate: Date, timeZone: string): number {
  const dtf = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" });
  const wd = dtf.format(utcDate);
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return map[wd] ?? 0;
}

function localYMD(utcDate: Date, timeZone: string): { year: number; month: number; day: number } {
  const dtf = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = dtf.formatToParts(utcDate);
  const map: Record<string, string> = {};
  for (const p of parts) if (p.type !== "literal") map[p.type] = p.value;
  return { year: Number(map.year), month: Number(map.month), day: Number(map.day) };
}

interface BusyInterval {
  start: Date;
  end: Date;
}

async function fetchBusy(timeMinISO: string, timeMaxISO: string): Promise<BusyInterval[]> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GOOGLE_CALENDAR_API_KEY = Deno.env.get("GOOGLE_CALENDAR_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
  if (!GOOGLE_CALENDAR_API_KEY) throw new Error("GOOGLE_CALENDAR_API_KEY is not configured");

  const res = await fetch(`${GATEWAY_URL}/freeBusy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_CALENDAR_API_KEY,
    },
    body: JSON.stringify({
      timeMin: timeMinISO,
      timeMax: timeMaxISO,
      timeZone: TIMEZONE,
      items: [{ id: "primary" }],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Google freeBusy failed [${res.status}]: ${JSON.stringify(data)}`);
  }
  const busy = data?.calendars?.primary?.busy ?? [];
  return busy.map((b: { start: string; end: string }) => ({
    start: new Date(b.start),
    end: new Date(b.end),
  }));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const now = new Date();
    const earliest = new Date(now.getTime() + NOTICE_HOURS * 60 * 60 * 1000);
    const horizonEnd = new Date(now.getTime() + HORIZON_DAYS * 24 * 60 * 60 * 1000);

    const busy = await fetchBusy(now.toISOString(), horizonEnd.toISOString());

    // Group slots by local YYYY-MM-DD.
    const slotsByDay: Record<string, string[]> = {};

    // Walk every local day in [today, today+HORIZON_DAYS].
    for (let d = 0; d <= HORIZON_DAYS; d++) {
      // Pick a stable instant inside that local day (noon) to derive YMD/weekday.
      const probe = new Date(now.getTime() + d * 24 * 60 * 60 * 1000);
      const { year, month, day } = localYMD(probe, TIMEZONE);
      // Build the actual local-noon instant for weekday lookup.
      const localNoon = utcFromLocal(year, month, day, 12, 0, TIMEZONE);
      const weekday = localWeekday(localNoon, TIMEZONE);
      if (weekday < 1 || weekday > 5) continue; // Mon–Fri only

      const dayKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

      for (let h = DAY_START_HOUR; h < DAY_END_HOUR; h++) {
        for (let m = 0; m < 60; m += SLOT_MINUTES) {
          const slotStart = utcFromLocal(year, month, day, h, m, TIMEZONE);
          const slotEnd = new Date(slotStart.getTime() + SLOT_MINUTES * 60000);

          if (slotStart < earliest) continue; // respect minimum notice
          if (slotEnd > horizonEnd) continue;

          const overlaps = busy.some((b) => slotStart < b.end && slotEnd > b.start);
          if (overlaps) continue;

          if (!slotsByDay[dayKey]) slotsByDay[dayKey] = [];
          slotsByDay[dayKey].push(slotStart.toISOString());
        }
      }
    }

    return new Response(
      JSON.stringify({
        timezone: TIMEZONE,
        slotMinutes: SLOT_MINUTES,
        slotsByDay,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("get-available-slots error:", message);
    return new Response(
      JSON.stringify({ error: "calendar_unavailable", message }),
      {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
