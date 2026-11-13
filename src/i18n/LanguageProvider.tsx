import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { LanguagePreferenceService } from "@/services";
import type { Language } from "@/types";
import { resolveInitialLanguage } from "@/util";
import { LanguageContext } from "./languageContext";
import { TRANSLATIONS } from "./translations";

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() =>
    resolveInitialLanguage(LanguagePreferenceService.get(), window.navigator.language)
  );

  const t = TRANSLATIONS[language];

  // Mantém o documento (idioma e título) em sincronia com o idioma escolhido.
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
  }, [language, t]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    LanguagePreferenceService.save(nextLanguage);
  }, []);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
