import { useLanguage, Language } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";

const LanguageGate = () => {
  const { hasSelected, setLanguage } = useLanguage();

  if (hasSelected) return null;

  const choose = (lang: Language) => setLanguage(lang);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{ backgroundColor: "#100d28" }}
      role="dialog"
      aria-modal="true"
      aria-label="Language selection"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(137, 6, 230, 0.25), transparent 55%), radial-gradient(circle at 70% 80%, rgba(5, 13, 235, 0.25), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full animate-fade-in">
        <Logo
          surface="dark"
          variant="full"
          alt="Quantum"
          className="h-24 sm:h-28 mb-6 w-auto drop-shadow-[0_0_40px_rgba(137,6,230,0.35)]"
        />

        <p className="mt-1 text-white/70 text-sm sm:text-base tracking-wide">
          AI for operational knowledge retention
          <span className="block text-white/40 text-xs mt-1">AI do utrzymania wiedzy operacyjnej</span>
        </p>

        <div className="mt-12 mb-6 text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase">
          Choose your language <span className="mx-2 opacity-50">/</span> Wybierz język
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center">
          <button
            onClick={() => choose("en")}
            className="group relative w-full sm:w-44 px-6 py-3.5 border border-white/40 text-white text-sm tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:border-white hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            English
          </button>
          <button
            onClick={() => choose("pl")}
            className="group relative w-full sm:w-44 px-6 py-3.5 border border-white/40 text-white text-sm tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:border-white hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Polski
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageGate;
