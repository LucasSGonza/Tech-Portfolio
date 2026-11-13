import { Box, Typography } from "@mui/material";
import { PageSection } from "@/components";
import { useLanguage } from "@/hooks";

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageSection title={t.about.title}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "70ch" }}>
        {t.about.paragraphs.map((paragraph) => (
          <Typography key={paragraph}>{paragraph}</Typography>
        ))}
      </Box>
    </PageSection>
  );
};
