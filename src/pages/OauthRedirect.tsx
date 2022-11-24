import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { captureException } from '@sentry/react';
import { OATH_EVENT } from '../constants/app';
import NotFound from 'components/templates/NotFound';

const OauthRedirect = () => {
  const [showNotFound, setShowNotFound] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    if (!window.opener) {
      setShowNotFound(true);
      return;
    }

    // window was opened from javascript
    const params = new URLSearchParams(search);
    const code = params.get('code');
    const error = params.get('error');
    const { provider } = JSON.parse(params.get('state')!);
    const errorDescription = params.get('error_description');

    if (!code && error !== 'access_denied') {
      captureException(
        new Error(
          `234234: Code is missing. Error: ${error}. ErrorDescription: ${errorDescription}`
        )
      );
    }

    if (!provider) {
      captureException(new Error(`Provider parameter is missing!`));
    }

    const customEvent = new CustomEvent(OATH_EVENT, {
      detail: {
        code,
        error,
        errorDescription,
        provider,
      },
    });

    window.opener.dispatchEvent(customEvent);
    window.close();
  }, []);

  return showNotFound ? <NotFound /> : null;
};

export default OauthRedirect;
