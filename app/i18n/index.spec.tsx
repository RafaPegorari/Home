import { i18n } from '@library/i18next';
import translationPt from './pt/translation.json';
import translationEn from './en/translation.json';
import './index';

describe('i18next', () => {
  it('should initialize the i18n', () => {
    const resources = [
      { lng: 'pt', resources: translationPt },
      { lng: 'en', resources: translationEn },
    ];

    expect(i18n.getResourceBundle(resources[0].lng, 'home')).toEqual(resources[0].resources);

    expect(i18n.getResourceBundle(resources[1].lng, 'home')).toEqual(resources[1].resources);
  });
});
