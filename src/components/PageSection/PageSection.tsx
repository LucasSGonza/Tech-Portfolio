import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface PageSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({ title, description, children }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        width: "100%",
        maxWidth: "md",
      }}
    >
      <Typography variant="h2" component="h1" color="primary" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ textAlign: "center" }}>
          {description}
        </Typography>
      )}
      {children}
    </Box>
  );
};
