/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { OnErrorFn } from '@formatjs/intl';
import { IntlProvider } from 'react-intl';
import { captureException } from '@sentry/react';

import { APP_PROD, APP_STAGE } from '../constants/app';
import { LOCALE } from './constants';
import messages from './messages';

type TProps = {
  locale: LOCALE;
  children?: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Object.entries(messages).forEach(([language, languageMessages]) => {
  Object.entries(languageMessages).forEach(([key, message]) => {
    // eslint-disable-next-line no-param-reassign
    (languageMessages as any)[key] = message.message;
  });
});

const Provider: React.FC<TProps> = ({ children, locale = LOCALE.ENGLISH }) => {
  const handleError: OnErrorFn = (err) => {
    if (APP_PROD || APP_STAGE) {
      captureException(err);
    } else {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] as any}
      onError={handleError}
    >
      {children}
    </IntlProvider>
  );
};

Provider.displayName = 'I18nProvider';

export default Provider;
