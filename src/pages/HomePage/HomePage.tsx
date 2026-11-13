import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { PixelIconList } from "@/components";
import { useLanguage } from "@/hooks";
import { LANGUAGE_OPTION_BY_CODE, PROFILE, SOCIAL_LINKS } from "@/util";

/** "Holofote" atrás do boneco, para ele se destacar também na tela escura. */
const spotlightSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexShrink: 0,
  p: 2,
  backgroundImage: (theme) =>
    `radial-gradient(circle at 50% 45%, ${alpha(theme.palette.primary.main, 0.22)}, transparent 70%)`,
};

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  const socialItems = SOCIAL_LINKS.map((link) => ({ ...link, name: t.home.social[link.id] }));

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 3, md: 6 },
        width: "100%",
        maxWidth: "md",
      }}
    >
      <Box sx={spotlightSx}>
        {/* Grade de 40×59 pixels: larguras múltiplas de 40 mantêm os pixels nítidos. */}
        <Box
          component="img"
          src={LANGUAGE_OPTION_BY_CODE[language].minifigure}
          alt={t.home.minifigureAlt}
          sx={{
            display: "block",
            width: { xs: 160, md: 240 },
            aspectRatio: "40 / 59",
            imageRendering: "pixelated",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
          minWidth: 0,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h1" color="primary">
          {PROFILE.name}
        </Typography>
        <Typography variant="h3" component="p" color="text.secondary">
          {PROFILE.age} {t.home.ageSuffix}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <PixelIconList items={socialItems} ariaLabel={t.home.socialLabel} />
        </Box>
      </Box>
    </Box>
  );
};
