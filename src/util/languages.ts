import avatarEn from "@/assets/avatars/avatar-en.png";
import avatarPt from "@/assets/avatars/avatar-pt.png";
import avatarEs from "@/assets/avatars/avatar-es.png";
import flagBr from "@/assets/icons/flags/br.svg";
import flagEs from "@/assets/icons/flags/es.svg";
import flagUs from "@/assets/icons/flags/us.svg";
import type { Language, LanguageOption } from "@/types";

export const DEFAULT_LANGUAGE: Language = "pt-BR";

export const LANGUAGE_OPTION_BY_CODE: Record<Language, LanguageOption> = {
  "pt-BR": { code: "pt-BR", label: "Português (Brasil)", flag: flagBr, avatar: avatarPt },
  "en-US": { code: "en-US", label: "English (US)", flag: flagUs, avatar: avatarEn },
  "es-ES": { code: "es-ES", label: "Español (España)", flag: flagEs, avatar: avatarEs },
};

export const LANGUAGE_OPTIONS: LanguageOption[] = Object.values(LANGUAGE_OPTION_BY_CODE);

export const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && value in LANGUAGE_OPTION_BY_CODE;

/** Ordem de prioridade: preferência salva → idioma do navegador → idioma padrão. */
export const resolveInitialLanguage = (
  storedLanguage: Language | null,
  browserLanguage: string
): Language => {
  if (storedLanguage) return storedLanguage;

  const browserPrefix = browserLanguage.slice(0, 2).toLowerCase();
  const matchingOption = LANGUAGE_OPTIONS.find((option) =>
    option.code.toLowerCase().startsWith(browserPrefix)
  );

  return matchingOption?.code ?? DEFAULT_LANGUAGE;
};
