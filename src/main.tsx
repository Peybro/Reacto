import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.scss";
import { LanguageProvider } from "@/components/language-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider defaultLanguage="system" storageKey="vite-ui-language">
      <div className="container">
        <App />
      </div>
    </LanguageProvider>
  </React.StrictMode>
);
