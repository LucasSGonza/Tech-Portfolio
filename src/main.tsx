import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "@/css/index.css";
import { LanguageProvider } from "@/i18n";
import { ThemeModeProvider } from "@/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeModeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeModeProvider>
    </BrowserRouter>
  </StrictMode>
);
