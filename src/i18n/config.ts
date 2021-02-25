import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationES from "./es/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupCookie: "next-i18next",
    },
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
