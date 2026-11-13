import { Box, ButtonBase, Icon, IconButton, Tooltip, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { NavLink } from "react-router-dom";
import bookDarkIcon from "@/assets/icons/menu/book-dark.svg";
import bookIcon from "@/assets/icons/menu/book.svg";
import computerDarkIcon from "@/assets/icons/menu/computer-dark.svg";
import computerIcon from "@/assets/icons/menu/computer.svg";
import homeDarkIcon from "@/assets/icons/menu/home-dark.svg";
import homeIcon from "@/assets/icons/menu/home.svg";
import { PixelIcon } from "@/components/PixelIcon";
import { useLanguage, useThemeMode } from "@/hooks";
import { ROUTES } from "@/util";

interface AppSidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
}

const COLLAPSED_WIDTH = 72;
const EXPANDED_WIDTH = 224;

// Os ícones do menu têm uma variante por tema: o rubi do modo claro some no fundo azul-escuro.
const NAV_ITEMS = [
  { key: "home", to: ROUTES.home, icons: { light: homeIcon, dark: homeDarkIcon } },
  { key: "tech", to: ROUTES.tech, icons: { light: computerIcon, dark: computerDarkIcon } },
  { key: "projects", to: ROUTES.projects, icons: { light: bookIcon, dark: bookDarkIcon } },
] as const;

// O espaço reservado no layout e o painel animam a largura com a mesma
// transição; se só um deles animar, a tela do aparelho "pula" enquanto o painel desliza.
const widthTransitionSx: SxProps<Theme> = {
  transition: (theme) => theme.transitions.create("width"),
};

export const AppSidebar: React.FC<AppSidebarProps> = ({ isExpanded, onToggle, onNavigate }) => {
  const { t } = useLanguage();
  const { mode } = useThemeMode();
  const width = isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH;

  return (
    // Em telas pequenas o espaço reservado é sempre o do menu recolhido:
    // ao expandir, o painel sobrepõe a tela do aparelho em vez de empurrá-la.
    <Box
      component="nav"
      aria-label={t.nav.label}
      sx={{
        ...widthTransitionSx,
        position: "relative",
        flexShrink: 0,
        width: { xs: COLLAPSED_WIDTH, md: width },
      }}
    >
      <Box
        sx={{
          ...widthTransitionSx,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: "drawer",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width,
          py: 2,
          overflowX: "hidden",
          overflowY: "auto",
          bgcolor: "background.paper",
          borderRight: 4,
          borderColor: "pokedex.edge",
        }}
      >
        {/* Posição fixa nos dois estados: o botão não sai de baixo do cursor ao alternar. */}
        <IconButton
          color="primary"
          aria-label={isExpanded ? t.nav.collapse : t.nav.expand}
          aria-expanded={isExpanded}
          onClick={onToggle}
          sx={{ alignSelf: "flex-start", ml: 1.75 }}
        >
          <Icon>{isExpanded ? "menu_open" : "menu"}</Icon>
        </IconButton>

        <Box
          component="ul"
          sx={{ display: "flex", flexDirection: "column", gap: 1, listStyle: "none", m: 0, p: 0 }}
        >
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key];

            return (
              <Box component="li" key={item.key}>
                <Tooltip title={isExpanded ? "" : label} placement="right" arrow>
                  <ButtonBase
                    component={NavLink}
                    to={item.to}
                    end={item.to === ROUTES.home}
                    aria-label={label}
                    onClick={onNavigate}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: 1.5,
                      width: "100%",
                      minHeight: 56,
                      // Com a borda esquerda, centraliza o ícone no menu recolhido
                      // e o mantém parado enquanto a largura anima.
                      pl: 1.25,
                      pr: 1.5,
                      color: "primary.main",
                      borderLeft: 4,
                      borderColor: "transparent",
                      "&:hover, &:focus-visible": { bgcolor: "action.hover" },
                      "&:focus-visible": {
                        outline: "3px solid",
                        outlineColor: "primary.main",
                        outlineOffset: -3,
                      },
                      "&.active": {
                        bgcolor: "background.default",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <PixelIcon src={item.icons[mode]} alt="" size={40} />
                    {/* Sempre renderizado: o painel recorta o rótulo enquanto a largura anima. */}
                    <Typography
                      variant="button"
                      sx={{
                        whiteSpace: "nowrap",
                        opacity: isExpanded ? 1 : 0,
                        transition: (theme) => theme.transitions.create("opacity"),
                      }}
                    >
                      {label}
                    </Typography>
                  </ButtonBase>
                </Tooltip>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
