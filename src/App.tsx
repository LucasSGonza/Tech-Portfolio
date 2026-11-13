import { Box, useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";
import { useState } from "react";
import { AppSidebar, LanguageSwitcher } from "@/components";
import WebRouter from "@/routes/WebRouter";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const handleToggleSidebar = () => {
    setIsSidebarExpanded((isExpanded) => !isExpanded);
  };

  // Em telas pequenas o menu expandido cobre o conteúdo, então é recolhido ao navegar.
  const handleNavigate = () => {
    if (isSmallScreen) setIsSidebarExpanded(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppSidebar
        isExpanded={isSidebarExpanded}
        onToggle={handleToggleSidebar}
        onNavigate={handleNavigate}
      />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
        }}
      >
        <Box
          component="header"
          sx={{
            position: { xs: "static", md: "absolute" },
            top: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <LanguageSwitcher />
        </Box>

        <Box
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            px: { xs: 2, md: 16 },
            pt: { xs: 1, md: 8 },
            pb: 4,
          }}
        >
          <WebRouter />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
