/* eslint-disable no-unreachable */
import * as Sentry from '@sentry/react';
import { APP_ENV } from '../constants/app';
import {
  detectBrowserCountry,
  detectTimeFormat,
  detectTimeZone,
  getBrowserLocale,
} from 'utils';

export const intiSentry = () => {
  // TODO: add env variable for sentry
  Sentry.init({
    dsn: '',
    // @ts-ignore
    enabled: import.meta.env.VITE_SENTRY_ENABLED === 'true',
    environment: APP_ENV,
    tracesSampleRate: 1.0,
  });

  try {
    Sentry.setContext('browser', {
      timeFormat: detectTimeFormat(),
      country: detectBrowserCountry(),
    });

    Sentry.setContext('culture', {
      timeZone: detectTimeZone() || 'undefined',
      locale: getBrowserLocale(),
    });
  } catch (error) {
    console.error(error);
  }
};
