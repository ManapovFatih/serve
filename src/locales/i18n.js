import en from './translate/en.json';
  import es from './translate/es.json';
  import fr from './translate/fr.json';
  import ru from './translate/ru.json';
  
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  import Backend from 'i18next-http-backend';
  import LanguageDetector from 'i18next-browser-languagedetector';

  const resources = {
  
    "EN": {
      translation: en
    },
  
    "ES": {
      translation: es
    },
  
    "FR": {
      translation: fr
    },
  
    "RU": {
      translation: ru
    },
  
  };

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false
      }
    });

  export default i18n;
  