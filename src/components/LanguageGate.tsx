import { useEffect, useMemo, useState } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";

const TAGLINES = [
  { lang: "en", text: "AI for operational knowledge retention" },
  { lang: "pl", text: "AI do utrzymania wiedzy operacyjnej" },
] as const;

// Timing — tuned to feel calm and breathing, not typewriter-like
const HOLD_MS = 3200;        // time the full text stays visible
const OUT_DURATION = 520;    // per-letter fade-out duration
const IN_DURATION = 720;     // per-letter fade-in duration
const OUT_STAGGER = 14;      // ms between consecutive letters going out
const IN_STAGGER = 22;       // ms between consecutive letters coming in

type Phase = "in" | "hold" | "out";

interface MorphingTaglineProps {
  text: string;
  phase: Phase;
  reducedMotion: boolean;
}

const MorphingTagline = ({ text, phase, reducedMotion }: MorphingTaglineProps) => {
  // Always call hooks before any early return
  const chars = useMemo(() => Array.from(text), [text]);
  const total = chars.length;

  // Reduced-motion fallback: simple, calm crossfade of the whole string
  if (reducedMotion) {
    return (
      <p
        className="text-white/85 text-base sm:text-lg tracking-wide leading-snug"
        lang={text === TAGLINES[0].text ? "en" : "pl"}
        style={{
          opacity: phase === "out" ? 0 : 1,
          transition: "opacity 600ms ease-in-out",
          willChange: "opacity",
        }}
      >
        {text}
      </p>
    );
  }

  return (
    <p
      className="text-white/85 text-base sm:text-lg tracking-wide leading-snug"
      lang={text === TAGLINES[0].text ? "en" : "pl"}
      aria-label={text}
    >
      {chars.map((ch, i) => {
        if (ch === " ") {
          // keep spaces as real spaces so wrapping works naturally
          return <span key={`s-${i}`}>{"\u00A0"}</span>;
        }

        // Per-letter delay: out animates left→right, in animates left→right too
        const outDelay = i * OUT_STAGGER;
        const inDelay = i * IN_STAGGER;

        let opacity = 1;
        let transform = "translateY(0) scale(1)";
        let filter = "blur(0px)";
        let transition = "";

        if (phase === "in") {
          opacity = 1;
          transform = "translateY(0) scale(1)";
          filter = "blur(0px)";
          transition = `opacity ${IN_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${inDelay}ms, transform ${IN_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${inDelay}ms, filter ${IN_DURATION}ms ease-out ${inDelay}ms`;
        } else if (phase === "hold") {
          opacity = 1;
          transform = "translateY(0) scale(1)";
          filter = "blur(0px)";
          transition = "none";
        } else {
          // out
          opacity = 0;
          transform = "translateY(-4px) scale(0.96)";
          filter = "blur(2px)";
          transition = `opacity ${OUT_DURATION}ms cubic-bezier(0.4, 0, 1, 1) ${outDelay}ms, transform ${OUT_DURATION}ms cubic-bezier(0.4, 0, 1, 1) ${outDelay}ms, filter ${OUT_DURATION}ms ease-in ${outDelay}ms`;
        }

        return (
          <span
            key={`${phase === "in" || phase === "hold" ? "v" : "x"}-${i}-${ch}`}
            style={{
              display: "inline-block",
              opacity,
              transform,
              filter,
              transition,
              willChange: "opacity, transform, filter",
            }}
          >
            {ch}
          </span>
        );
      })}
      {/* avoid lint warning about unused total */}
      <span className="sr-only">{total}</span>
    </p>
  );
};

const LanguageGate = () => {
  const { hasSelected, setLanguage } = useLanguage();
  const [tagIndex, setTagIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("in");

  useEffect(() => {
    if (hasSelected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [hasSelected]);

  // Drive the in → hold → out → swap cycle
  useEffect(() => {
    if (hasSelected) return;
    const currentText = TAGLINES[tagIndex].text;
    const outTotal = OUT_DURATION + currentText.length * OUT_STAGGER;
    const inTotal = IN_DURATION + currentText.length * IN_STAGGER;

    let t1: number, t2: number, t3: number;

    // Mount with phase "in" → wait for in to complete → hold → out → swap
    setPhase("in");
    t1 = window.setTimeout(() => {
      setPhase("hold");
      t2 = window.setTimeout(() => {
        setPhase("out");
        t3 = window.setTimeout(() => {
          setTagIndex((i) => (i + 1) % TAGLINES.length);
        }, outTotal + 60);
      }, HOLD_MS);
    }, inTotal + 60);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [tagIndex, hasSelected]);

  if (hasSelected) return null;

  const choose = (lang: Language) => setLanguage(lang);
  const current = TAGLINES[tagIndex];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: "#100d28" }}
      role="dialog"
      aria-modal="true"
      aria-label="Language selection"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(137, 6, 230, 0.28), transparent 55%), radial-gradient(circle at 70% 75%, rgba(5, 13, 235, 0.28), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full animate-fade-in">
        <Logo
          surface="dark"
          variant="full"
          alt="Quantum"
          className="h-28 sm:h-36 w-auto drop-shadow-[0_0_50px_rgba(137,6,230,0.4)]"
        />

        <p className="mt-3 text-white/40 text-[11px] sm:text-xs tracking-[0.25em] uppercase">
          Built in Poland
        </p>

        <div
          className="mt-10 min-h-[2.5rem] sm:min-h-[2.75rem] w-full flex items-center justify-center px-4"
          aria-live="polite"
        >
          <MorphingTagline key={current.lang} text={current.text} phase={phase} />
        </div>

        <div className="mt-12 mb-6 text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase">
          Choose your language <span className="mx-2 opacity-50">/</span> Wybierz język
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center">
          <button
            onClick={() => choose("en")}
            className="w-full sm:w-44 px-6 py-3.5 border border-white/40 text-white text-sm tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:border-white hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            English
          </button>
          <button
            onClick={() => choose("pl")}
            className="w-full sm:w-44 px-6 py-3.5 border border-white/40 text-white text-sm tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:border-white hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Polski
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageGate;
