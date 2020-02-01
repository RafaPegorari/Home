import { i18nextConfig } from '@library/i18next';
import translationPt from './pt/translation.json';
import translationEn from './en/translation.json';

export default i18nextConfig('home', [
  { lng: 'pt', resources: translationPt },
  { lng: 'en', resources: translationEn },
]);
