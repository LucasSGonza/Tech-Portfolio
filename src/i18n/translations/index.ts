import type { Language } from "@/types";
import { enUS } from "./enUS";
import { esES } from "./esES";
import { ptBR } from "./ptBR";
import type { Translation } from "./ptBR";

export type { Translation } from "./ptBR";

export const TRANSLATIONS: Record<Language, Translation> = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-ES": esES,
};
