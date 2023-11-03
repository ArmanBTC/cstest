import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import HeaderTranslate_En from "./languages/en/HeaderTranslate.json";
import HeaderTranslate_Ru from "./languages/ru/HeaderTranslate.json";
import HeaderTranslate_Pl from "./languages/pl/HeaderTranslate.json";

import IndexPage_En from "./languages/en/IndexPageTranslate.json";
import IndexPage_Ru from "./languages/ru/IndexPageTranslate.json";
import IndexPage_Pl from "./languages/pl/IndexPageTranslate.json";

const resources = {
  en: {
    header: HeaderTranslate_En,
    indexPage: IndexPage_En,
  },
  pl: {
    header: HeaderTranslate_Pl,
    indexPage: IndexPage_Pl,
  },
  ru: {
    header: HeaderTranslate_Ru,
    indexPage: IndexPage_Ru,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", // default language
});

export const TransletionResourcesConfig = {
  ns: ["header", "indexPage"],
};

export default i18next;
