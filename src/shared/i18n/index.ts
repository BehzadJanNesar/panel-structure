import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './locales/en';
import { fa } from './locales/fa';

if (!i18n.isInitialized) {
   void i18n.use(initReactI18next).init({
      resources: {
         fa: { common: fa },
         en: { common: en },
      },
      lng: 'fa',
      fallbackLng: 'fa',
      defaultNS: 'common',
      interpolation: { escapeValue: false },
   });
}

export default i18n;
