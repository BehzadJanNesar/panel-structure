import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { fa } from './locales/fa';

if (!i18n.isInitialized) {
   void i18n.use(initReactI18next).init({
      resources: {
         fa: { common: fa },
      },
      lng: 'fa',
      fallbackLng: 'fa',
      defaultNS: 'common',
      interpolation: { escapeValue: false },
   });
}

export default i18n;
