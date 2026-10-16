import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { applyPalette } from '@/shared/config/palette';
import i18n from '@/shared/i18n';
import '@/shared/lib/jalali';

import 'antd/dist/reset.css';
import '@/styles/global.css';

document.documentElement.lang = i18n.language || 'fa';
document.documentElement.dir = i18n.dir(i18n.language);
applyPalette();

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>,
);
