import { lang_en } from "./languages/lang_en";
import { lang_fr } from "./languages/lang_fr";
import { lang_de } from "./languages/lang_de";
import { LanguagesType } from "@/types";

export const translations: LanguagesType = {
  en: lang_en,
  fr: lang_fr,
  de: lang_de,
  system: lang_de,
} as const;
