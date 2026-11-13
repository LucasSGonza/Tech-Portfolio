import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type { PaletteOptions, Theme } from "@mui/material/styles";
import type { ThemeMode } from "@/types";

/** Cores do aparelho "Pokédex" que envolve a interface. */
interface PokedexPalette {
  /** Corpo do aparelho. */
  body: string;
  /** Borda externa do aparelho e contorno das peças decorativas. */
  edge: string;
  /** Fundo da tela (área das rotas). */
  screen: string;
  /** Moldura da tela. */
  bezel: string;
  /** Lente redonda da faixa superior. */
  lens: string;
  /** Texto sobre o corpo do aparelho. */
  bodyText: string;
  /** Luzes decorativas da faixa superior. */
  lights: [string, string, string];
}

declare module "@mui/material/styles" {
  interface Palette {
    pokedex: PokedexPalette;
  }

  interface PaletteOptions {
    pokedex?: PokedexPalette;
  }
}

const FONT_FAMILY = '"JetBrains Mono", Consolas, Menlo, monospace';
const BOLD = 700;

const LIGHTS: PokedexPalette["lights"] = ["#FF5A5A", "#FFD23F", "#5BD16A"];

const PALETTES: Record<ThemeMode, PaletteOptions> = {
  dark: {
    mode: "dark",
    primary: { main: "#6FB1FF" },
    secondary: { main: "#4570B8" },
    background: { default: "#060A18", paper: "#0F1B36" },
    text: { primary: "#E8F0FF", secondary: "#A8B8D8" },
    divider: "#4570B8",
    pokedex: {
      body: "#1D3F78",
      edge: "#0C1E40",
      screen: "#0B1428",
      bezel: "#060D1D",
      lens: "#7FD4FF",
      bodyText: "#E8F0FF",
      lights: LIGHTS,
    },
  },
  light: {
    mode: "light",
    primary: { main: "#A3131F" },
    secondary: { main: "#6E1A1A" },
    background: { default: "#F3E7CF", paper: "#FBF4E4" },
    text: { primary: "#2B2B2B", secondary: "#5A4A42" },
    divider: "#6E1A1A",
    pokedex: {
      body: "#C62828",
      edge: "#7F1414",
      screen: "#FBF4E4",
      bezel: "#3A2A26",
      lens: "#7FD4FF",
      bodyText: "#FFF8EE",
      lights: LIGHTS,
    },
  },
};

const STAR_COLORS = { dim: "#3A5687", bright: "#C9DAFF" };

/**
 * Estrelas em pixel do céu noturno (modo escuro), como SVG embutido.
 * Duas camadas com tamanhos de ladrilho diferentes evitam um padrão repetitivo.
 */
const createStarLayer = (tileSize: number, dimStars: string, brightStars: string) => {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tileSize} ${tileSize}" shape-rendering="crispEdges">` +
    `<path fill="${STAR_COLORS.dim}" d="${dimStars}"/>` +
    `<path fill="${STAR_COLORS.bright}" d="${brightStars}"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

const STAR_FIELD = [
  createStarLayer(
    96,
    "M7 11h1v1h-1zM31 4h1v1h-1zM58 19h1v1h-1zM83 9h1v1h-1zM15 47h1v1h-1zM44 62h1v1h-1zM71 41h1v1h-1zM90 70h1v1h-1zM26 85h1v1h-1zM62 90h1v1h-1z",
    "M48 30h1v1h-1zM78 82h1v1h-1z"
  ),
  createStarLayer(
    150,
    "M19 128h1v1h-1zM102 117h1v1h-1zM131 22h1v1h-1zM66 140h1v1h-1z",
    "M40 66h1v1h-1zM39 67h3v1h-3zM40 68h1v1h-1zM118 74h1v1h-1zM117 75h3v1h-3zM118 76h1v1h-1z"
  ),
].join(", ");

export const createAppTheme = (mode: ThemeMode): Theme => {
  const theme = createTheme({
    palette: PALETTES[mode],
    shape: { borderRadius: 0 },
    typography: {
      fontFamily: FONT_FAMILY,
      h1: { fontWeight: BOLD, fontSize: "2.25rem", lineHeight: 1.15 },
      h2: { fontWeight: BOLD, fontSize: "1.75rem", lineHeight: 1.2 },
      h3: { fontWeight: BOLD, fontSize: "1.25rem", lineHeight: 1.25 },
      h4: { fontWeight: BOLD },
      h5: { fontWeight: BOLD },
      h6: { fontWeight: BOLD },
      button: { fontWeight: BOLD, textTransform: "none", fontSize: "1rem" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // Céu estrelado só no modo escuro; no claro o fundo é creme liso.
          // Cada ladrilho é desenhado no dobro do tamanho: cada estrela vira um "pixel" de 2px.
          body:
            mode === "dark"
              ? { backgroundImage: STAR_FIELD, backgroundSize: "192px 192px, 300px 300px" }
              : {},
          // Vale para todas as transições e animações, inclusive as do MUI (diálogo, menu, tooltip).
          "@media (prefers-reduced-motion: reduce)": {
            "*, *::before, *::after": {
              animationDuration: "0.01ms !important",
              animationIterationCount: "1 !important",
              transitionDuration: "0.01ms !important",
              scrollBehavior: "auto !important",
            },
          },
        },
      },
      MuiPaper: {
        // No modo escuro o MUI clareia o Paper conforme a elevação; os tokens já definem a cor final.
        styleOverrides: { root: { backgroundImage: "none" } },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: ({ theme }) => ({
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.background.paper,
            fontSize: theme.typography.pxToRem(16),
            fontWeight: BOLD,
          }),
          arrow: ({ theme }) => ({
            color: theme.palette.text.primary,
          }),
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};
