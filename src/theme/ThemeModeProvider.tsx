import { CssBaseline, ThemeProvider } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ThemeModePreferenceService } from "@/services";
import type { ThemeMode } from "@/types";
import { DEFAULT_THEME_MODE } from "@/util";
import { createAppTheme } from "./theme";
import { ThemeModeContext } from "./themeModeContext";

interface ThemeModeProviderProps {
  children: ReactNode;
}

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({ children }) => {
  // Leitura síncrona no primeiro render: o tema salvo já aparece sem "piscar" o padrão.
  const [mode, setMode] = useState<ThemeMode>(
    () => ThemeModePreferenceService.get() ?? DEFAULT_THEME_MODE
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleMode = useCallback(() => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    ThemeModePreferenceService.save(nextMode);
  }, [mode]);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
