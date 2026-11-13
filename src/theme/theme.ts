import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const HEADING_FONT_FAMILY = '"Pixelify Sans", "JetBrains Mono", monospace';
const BODY_FONT_FAMILY = '"JetBrains Mono", Consolas, Menlo, monospace';

const headingStyle = { fontFamily: HEADING_FONT_FAMILY, fontWeight: 700 };

const baseTheme = createTheme({
  palette: {
    primary: { main: "#8E1023" },
    secondary: { main: "#5B3A1E" },
    background: { default: "#D8B88A", paper: "#EBD9B4" },
    text: { primary: "#2B2B2B", secondary: "#4A3F35" },
    divider: "#5B3A1E",
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: BODY_FONT_FAMILY,
    h1: { ...headingStyle, fontSize: "4rem", lineHeight: 1.1 },
    h2: { ...headingStyle, fontSize: "2.5rem", lineHeight: 1.15 },
    h3: { ...headingStyle, fontSize: "1.5rem", lineHeight: 1.2 },
    h4: headingStyle,
    h5: headingStyle,
    h6: headingStyle,
    button: { ...headingStyle, textTransform: "none", fontSize: "1rem" },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.paper,
          fontFamily: HEADING_FONT_FAMILY,
          fontSize: theme.typography.pxToRem(16),
        }),
        arrow: ({ theme }) => ({
          color: theme.palette.secondary.main,
        }),
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
