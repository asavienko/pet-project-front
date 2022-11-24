/* eslint-disable default-param-last */
import React from 'react';
import { useIntl } from 'react-intl';

const useTranslation = () => {
  const { formatMessage } = useIntl();

  const t: typeof formatMessage = (descriptor, values = {}, opts): any =>
    formatMessage(
      descriptor,
      {
        br: () => <br />,
        ...values,
      },
      opts
    );

  return {
    t,
  };
};

export default useTranslation;
