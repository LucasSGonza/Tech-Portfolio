import type { ThemeMode } from "@/types";

export const DEFAULT_THEME_MODE: ThemeMode = "dark";

export const isThemeMode = (value: unknown): value is ThemeMode =>
  value === "dark" || value === "light";
