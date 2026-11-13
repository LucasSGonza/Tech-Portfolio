import { useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";
import { useState } from "react";
import { AppSidebar, DeviceFrame, DeviceHeader } from "@/components";
import WebRouter from "@/routes/WebRouter";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const handleToggleSidebar = () => {
    setIsSidebarExpanded((isExpanded) => !isExpanded);
  };

  // Em telas pequenas o menu expandido cobre a tela do aparelho, então é recolhido ao navegar.
  const handleNavigate = () => {
    if (isSmallScreen) setIsSidebarExpanded(false);
  };

  return (
    <DeviceFrame
      header={<DeviceHeader />}
      sidebar={
        <AppSidebar
          isExpanded={isSidebarExpanded}
          onToggle={handleToggleSidebar}
          onNavigate={handleNavigate}
        />
      }
    >
      <WebRouter />
    </DeviceFrame>
  );
}

export default App;
