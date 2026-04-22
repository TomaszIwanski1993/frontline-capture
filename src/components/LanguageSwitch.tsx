import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wide">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "en"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-muted-foreground/40">/</span>
      <button
        onClick={() => setLanguage("pl")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "pl"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Przełącz na polski"
      >
        PL
      </button>
    </div>
  );
};

export default LanguageSwitch;
