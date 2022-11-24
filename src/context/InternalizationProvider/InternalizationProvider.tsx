import React, { createContext, useContext } from 'react';
import { setContext as setSentryContext } from '@sentry/react';
import useLocalStorage from 'react-use/lib/useLocalStorage';
import en from 'date-fns/esm/locale/en-US';
import ua from 'date-fns/esm/locale/uk';
import { I18nPropvider, LOCALE } from '../../i18n';
import { getBrowserLocale } from '../../utils';
import { detectInterfaceLocale } from '../../utils/localization.utils';

type TInternalizationContext = {
  locale: LOCALE;
  isEnglish: boolean;
  changeLocale: (locale: LOCALE) => void;
};

const formatLocalizationMap = {
  [LOCALE.ENGLISH]: en,
  [LOCALE.UA]: ua,
};

const calculateLocale = (locale: LOCALE, browserLocale: string) => {
  const localeLanguage = locale.split('-')[0];
  const browserLanguage = browserLocale.split('-')[0];

  const result = browserLanguage === localeLanguage ? browserLocale : locale;

  return result;
};

const InternalizationContext = createContext({} as TInternalizationContext);

const InternalizationContextProvider: React.FC<any> = (props) => {
  const [locale = LOCALE.ENGLISH, setLocale] = useLocalStorage<LOCALE>(
    'language',
    detectInterfaceLocale()
  );

  const dateFnsLocale = formatLocalizationMap[locale];

  const browserLocale = getBrowserLocale();
  if (!window.constants) {
    window.constants = {};
  }
  window.constants.locale = locale;
  window.constants.dateFnsLocale = dateFnsLocale;
  window.constants.browserLocale = browserLocale;

  const changeLocale = (newLocale: LOCALE) => {
    setLocale(newLocale);

    setSentryContext('userInfo', {
      userSelectedLocale: newLocale,
    });
  };

  return (
    <InternalizationContext.Provider
      value={{
        locale,
        changeLocale,
        isEnglish: locale.startsWith('en'),
      }}
    >
      <I18nPropvider locale={locale}>{props.children}</I18nPropvider>
    </InternalizationContext.Provider>
  );
};

// @ts-ignore
const useInternalizationContext = () => useContext(InternalizationContext);

// @ts-ignore
export { InternalizationContextProvider, useInternalizationContext };
