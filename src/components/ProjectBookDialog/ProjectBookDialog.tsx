import { Box, Button, Dialog, Icon, IconButton, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { PixelIcon } from "@/components/PixelIcon";
import { useLanguage } from "@/hooks";
import type { Project } from "@/types";

interface ProjectBookDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const TITLE_ID = "project-book-title";

/** Capa do livro: moldura em volta das duas páginas, com a borda do aparelho. */
const coverSx: SxProps<Theme> = {
  bgcolor: "secondary.main",
  border: 4,
  borderColor: "pokedex.edge",
  p: { xs: 1, sm: 2 },
  pt: { xs: 0.5, sm: 0.5 },
};

const pageSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 2,
  minHeight: { md: 360 },
  p: { xs: 2, sm: 3 },
  bgcolor: "background.paper",
};

export const ProjectBookDialog: React.FC<ProjectBookDialogProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby={TITLE_ID}
      slotProps={{ paper: { sx: coverSx } }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton aria-label={t.projects.close} onClick={onClose} sx={{ color: "secondary.contrastText" }}>
          <Icon>close</Icon>
        </IconButton>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
        {/* Página esquerda: identificação e resumo */}
        <Box
          sx={{
            ...pageSx,
            borderRight: { xs: 0, md: 4 },
            borderBottom: { xs: 4, md: 0 },
            borderColor: "divider",
          }}
        >
          <PixelIcon src={project.icon} alt="" size={64} />
          <Typography id={TITLE_ID} variant="h2" color="primary" sx={{ overflowWrap: "anywhere" }}>
            {project.name}
          </Typography>
          <Typography variant="h3">{t.projects.summaryLabel}</Typography>
          <Typography>{t.projects.summaries[project.id]}</Typography>
        </Box>

        {/* Página direita: tecnologias e links */}
        <Box sx={pageSx}>
          <Typography variant="h3">{t.projects.technologiesLabel}</Typography>
          <Box
            component="ul"
            sx={{ display: "flex", flexWrap: "wrap", gap: 1, listStyle: "none", m: 0, p: 0 }}
          >
            {project.technologies.map((technology) => (
              <Box
                component="li"
                key={technology.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1,
                  py: 0.5,
                  border: 2,
                  borderColor: "divider",
                }}
              >
                <PixelIcon src={technology.icon} alt="" size={24} />
                <Typography variant="body2">{technology.name}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: "auto", pt: 2 }}>
            <Button
              component="a"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              {t.projects.repository}
            </Button>
            {project.demoUrl && (
              <Button
                component="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
              >
                {t.projects.demo}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
