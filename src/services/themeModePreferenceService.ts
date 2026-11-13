import type { ThemeMode } from "@/types";
import { isThemeMode } from "@/util";

const STORAGE_KEY = "tech-portfolio:theme-mode";

/**
 * Persistência da preferência de tema no navegador.
 * O armazenamento pode estar indisponível (modo privado, cota, bloqueio por política);
 * nesses casos a preferência só vale para a sessão atual, sem quebrar a aplicação.
 */
export const ThemeModePreferenceService = {
  get: (): ThemeMode | null => {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);
      return isThemeMode(storedValue) ? storedValue : null;
    } catch {
      return null;
    }
  },

  save: (mode: ThemeMode): boolean => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
      return true;
    } catch {
      return false;
    }
  },
};
