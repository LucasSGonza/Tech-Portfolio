import { Icon, IconButton, Tooltip } from "@mui/material";
import { useLanguage, useThemeMode } from "@/hooks";

export const ThemeModeToggle: React.FC = () => {
  const { t } = useLanguage();
  const { mode, toggleMode } = useThemeMode();

  // O rótulo e o ícone descrevem a ação (o modo que será ativado), não o modo atual.
  const isDarkMode = mode === "dark";
  const label = isDarkMode ? t.themeMode.enableLight : t.themeMode.enableDark;

  return (
    <Tooltip title={label} arrow>
      <IconButton color="primary" aria-label={label} onClick={toggleMode} sx={{ p: 1.5 }}>
        <Icon>{isDarkMode ? "light_mode" : "dark_mode"}</Icon>
      </IconButton>
    </Tooltip>
  );
};
