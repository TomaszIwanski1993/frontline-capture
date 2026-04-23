import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "pl";

interface LanguageContextValue {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  hasSelected: boolean;
}

const STORAGE_KEY = "quantum-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [hasSelected, setHasSelected] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Always show the language gate on every page load.
    // We still read a stored preference (if any) just to set <html lang>,
    // but we do NOT mark the language as "selected" — the gate will appear.
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === "en" || stored === "pl") {
        document.documentElement.lang = stored;
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      // Cookie fallback (1 year)
      document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
    setLanguageState(lang);
    setHasSelected(true);
  };

  if (!hydrated) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, hasSelected }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
