import { setupI18n } from '@lingui/core';
import enMessages from './locales/en/messages.js';
import esMessages from './locales/es/messages.js';
import frMessages from './locales/fr/messages.js';

export const ITERATION = 1000;

export const getI18n = locale => setupI18n(setupConfig(locale));

function setupConfig(locale) {
  switch (locale) {
    case 'en':
      return {
        language: 'en',
        catalogs: {
          en: enMessages
        }
      };
      break;

    case 'es':
      return {
        language: 'es',
        catalogs: {
          es: esMessages
        }
      };
      break;
    case 'fr':
      return {
        language: 'fr',
        catalogs: {
          fr: frMessages
        }
      };
      break;
  }
}
