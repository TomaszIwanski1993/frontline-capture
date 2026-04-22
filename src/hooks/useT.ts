import { useLanguage } from "@/contexts/LanguageContext";
import { getT } from "@/lib/translations";

export const useT = () => {
  const { language } = useLanguage();
  return getT(language);
};
