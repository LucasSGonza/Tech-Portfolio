import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import { useLanguage } from "@/hooks";

const LIGHT_INDEXES = [0, 1, 2] as const;

const lensSx: SxProps<Theme> = {
  position: "relative",
  flexShrink: 0,
  width: { xs: 36, md: 48 },
  height: { xs: 36, md: 48 },
  borderRadius: "50%",
  bgcolor: "pokedex.lens",
  border: 4,
  borderColor: "pokedex.bodyText",
  boxShadow: (theme) => `0 0 0 4px ${theme.palette.pokedex.edge}`,
};

const lensGlareSx: SxProps<Theme> = {
  position: "absolute",
  top: "18%",
  left: "18%",
  width: "28%",
  height: "28%",
  borderRadius: "50%",
  bgcolor: "pokedex.bodyText",
};

/** Faixa superior do aparelho: lente e luzes decorativas, rótulo e controles. */
export const DeviceHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1.5, md: 2 },
        px: { xs: 1.5, md: 2 },
        py: 1.5,
        borderBottom: 4,
        borderColor: "pokedex.edge",
      }}
    >
      <Box aria-hidden sx={lensSx}>
        <Box sx={lensGlareSx} />
      </Box>

      <Box
        aria-hidden
        sx={{ display: { xs: "none", sm: "flex" }, gap: 1, alignSelf: "flex-start", pt: 0.5 }}
      >
        {LIGHT_INDEXES.map((index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: (theme) => theme.palette.pokedex.lights[index],
              border: 2,
              borderColor: "pokedex.edge",
            }}
          />
        ))}
      </Box>

      <Typography
        variant="overline"
        component="p"
        sx={{
          flex: 1,
          minWidth: 0,
          color: "pokedex.bodyText",
          fontWeight: 700,
          lineHeight: 1.5,
        }}
      >
        {t.device.title}
      </Typography>

      {/* Painel de controles: fundo próprio para a bandeira e o ícone contrastarem com o corpo. */}
      <Box
        sx={{
          display: "flex",
          flexShrink: 0,
          bgcolor: "background.paper",
          border: 4,
          borderColor: "pokedex.edge",
        }}
      >
        <LanguageSwitcher />
        <ThemeModeToggle />
      </Box>
    </Box>
  );
};
