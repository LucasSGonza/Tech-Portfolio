import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { keyframes } from "@mui/material/styles";
import campfireSprite from "@/assets/home/campfire.svg";
import { useLanguage } from "@/hooks";

// A folha de sprites tem 3 quadros lado a lado; `steps(3)` exibe um quadro por vez.
const flicker = keyframes`
  from { background-position-x: 0%; }
  to { background-position-x: 150%; }
`;

const spriteSx: SxProps<Theme> = {
  width: { xs: 128, md: 192 },
  aspectRatio: "1 / 1",
  // Aspas obrigatórias: o SVG pode ser embutido como data URI com caracteres especiais.
  backgroundImage: `url("${campfireSprite}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "300% 100%",
  imageRendering: "pixelated",
  animation: `${flicker} 0.6s steps(3) infinite`,
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
};

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        width: "100%",
        maxWidth: "md",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" color="primary" sx={{ overflowWrap: "anywhere" }}>
        {t.home.title}
        <Box component="span" sx={{ display: "block" }}>
          {t.home.period}
        </Box>
      </Typography>
      <Box role="img" aria-label={t.home.spriteAlt} sx={spriteSx} />
    </Box>
  );
};
