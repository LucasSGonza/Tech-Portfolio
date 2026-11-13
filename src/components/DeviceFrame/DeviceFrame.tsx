import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface DeviceFrameProps {
  /** Faixa superior do aparelho. */
  header: ReactNode;
  /** Coluna de botões à esquerda da tela. */
  sidebar: ReactNode;
  /** Conteúdo exibido na tela (a `<main>`). */
  children: ReactNode;
}

const DEVICE_MAX_WIDTH = 1040;
// A altura mínima desconta o respiro em volta do aparelho (p: 3 = 24px de cada lado).
const DEVICE_MIN_HEIGHT = "min(720px, calc(100vh - 48px))";

/**
 * Aparelho portátil centralizado na página: corpo com faixa superior,
 * barra lateral e a tela com moldura, onde as rotas são renderizadas.
 */
export const DeviceFrame: React.FC<DeviceFrameProps> = ({ header, sidebar, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { md: "center" },
        minHeight: "100vh",
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: DEVICE_MAX_WIDTH,
          minHeight: { md: DEVICE_MIN_HEIGHT },
          bgcolor: "pokedex.body",
          border: 4,
          borderColor: "pokedex.edge",
        }}
      >
        {header}

        <Box sx={{ display: "flex", flex: 1 }}>
          {sidebar}

          <Box sx={{ display: "flex", flex: 1, minWidth: 0, p: { xs: 1, md: 2 } }}>
            {/* Moldura (bezel) em volta da tela rebaixada. */}
            <Box
              sx={{
                display: "flex",
                flex: 1,
                minWidth: 0,
                p: { xs: 0.5, md: 1.5 },
                bgcolor: "pokedex.bezel",
                border: 4,
                borderColor: "pokedex.edge",
              }}
            >
              <Box
                component="main"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minWidth: 0,
                  px: { xs: 2, md: 4 },
                  py: { xs: 3, md: 4 },
                  bgcolor: "pokedex.screen",
                  color: "text.primary",
                }}
              >
                {/* Margem automática: centraliza na vertical sem cortar conteúdo mais alto que a tela. */}
                <Box sx={{ display: "flex", justifyContent: "center", width: "100%", my: "auto" }}>
                  {children}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
