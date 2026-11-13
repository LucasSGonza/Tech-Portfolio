import { createContext } from "react";
import type { Language } from "@/types";
import type { Translation } from "./translations";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Dicionário do idioma atual. */
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
