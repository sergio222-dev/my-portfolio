import esJson from './assets/locale/es.json';
import enJson from './assets/locale/en.json';
import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: Resource = {
  es: {
    translation: {
      ...esJson,
    },
  },
  en: {
    translation: {
      ...enJson,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});
