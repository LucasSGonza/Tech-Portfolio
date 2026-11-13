import type { Language } from "@/types";
import { isLanguage } from "@/util";

const STORAGE_KEY = "tech-portfolio:language";

/**
 * Persistência da preferência de idioma no navegador.
 * O armazenamento pode estar indisponível (modo privado, cota, bloqueio por política);
 * nesses casos a preferência só vale para a sessão atual, sem quebrar a aplicação.
 */
export const LanguagePreferenceService = {
  get: (): Language | null => {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);
      return isLanguage(storedValue) ? storedValue : null;
    } catch {
      return null;
    }
  },

  save: (language: Language): boolean => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
      return true;
    } catch {
      return false;
    }
  },
};
