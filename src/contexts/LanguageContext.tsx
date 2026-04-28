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
    // If a language was previously chosen, skip the gate entirely.
    // Otherwise default to English so the site is immediately visible,
    // while still allowing the user to switch via the gate or the language switcher.
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === "en" || stored === "pl") {
        document.documentElement.lang = stored;
        setLanguageState(stored);
        setHasSelected(true);
      }
    } catch {
      // ignore — gate will be shown
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
