/* eslint-disable @typescript-eslint/no-use-before-define */
import { LOCALE } from '../i18n';
import { timeZonesMapFull } from 'constants/timeZones';

export const detectTimeFormat = (
  locale?: string
): 'h23' | 'h12' | 'h11' | 'h24' | undefined => {
  const calculatedLocale = locale || getBrowserLocale();

  const timeFormat = Intl.DateTimeFormat(calculatedLocale, {
    hour: 'numeric',
  }).resolvedOptions().hourCycle;

  return timeFormat || 'h24';
};

export const detectTimeZone = () =>
  Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;

export const getDateFnsLocale = () => window.constants.dateFnsLocale;

export const detectInterfaceLocale = (preferLocale?: string) => {
  let { language } = window.navigator;
  if (preferLocale) {
    language = preferLocale;
  }

  [language] = language.split('-');
  return (
    Object.values(LOCALE).find((name) => name.split('-')[0] === language) ||
    LOCALE.ENGLISH
  );
};

export const getBrowserLocale = () => window.navigator.language;

export const detectBrowserCountry = () => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  const country = timeZonesMapFull[timeZone];

  return country?.countryCode || 'US';
};
