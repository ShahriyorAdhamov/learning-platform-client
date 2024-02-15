import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next)
  .use(detector) // passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    ns: ['layout', 'home'],
    backend: {loadPath: '/locales/{{lng}}/{{ns}}.json'},
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: { order: ['cookie', 'localstorage'], caches: ['cookie'] },
  });