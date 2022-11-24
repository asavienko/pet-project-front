import React, { useEffect } from 'react';
import { captureException } from '@sentry/react';
import { T } from 'i18n/translate';

type TProps = {
  reason: string;
};

const ErrorRoute: React.VFC<TProps> = ({ reason }) => {
  useEffect(() => {
    captureException(new Error(`Error route rendered. Reason: ${reason}`));
  }, []);

  return (
    <div>
      <T defaultMessage="Something went wrong, please refresh the page" />
    </div>
  );
};

export default ErrorRoute;
