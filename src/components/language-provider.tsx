import { translations } from "@/translations";
import { AvailableLanguages, Translation, availableLanguages } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: AvailableLanguages;
  storageKey?: string;
};

type LanguageProviderState = {
  language: AvailableLanguages;
  setLanguage: (language: AvailableLanguages) => void;
  translation: Translation;
};

const initialState: LanguageProviderState = {
  language: "system",
  setLanguage: () => null,
  translation: translations.system,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "system",
  storageKey = "vite-ui-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<AvailableLanguages>(
    () =>
      (localStorage.getItem(storageKey) as AvailableLanguages) ||
      defaultLanguage,
  );

  useEffect(() => {
    if (language === "system") {
      const systemLanguage = navigator.language.split(
        "-",
      )[0] as AvailableLanguages;
      localStorage.setItem(storageKey, "system");
      setLanguage(
        availableLanguages.includes(systemLanguage) ? systemLanguage : "en",
      );

      return;
    }
  }, [language]);

  const value = {
    language,
    setLanguage: (language: AvailableLanguages) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
    translation: translations[language],
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
