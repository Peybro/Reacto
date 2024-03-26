import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.scss";
import { LanguageProvider } from "@/components/language-provider.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { StoreProvider } from "./components/store-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <LanguageProvider defaultLanguage="system" storageKey="vite-ui-language">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="container">
            <App />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </StoreProvider>
  </React.StrictMode>,
);
