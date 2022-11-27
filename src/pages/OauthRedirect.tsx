import { useEffect, useState } from 'react';
import NotFound from 'components/templates/NotFound';

const OauthRedirect = () => {
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    if (!window.opener) {
      setShowNotFound(true);
      return;
    }

    window.close();
  }, []);

  return showNotFound ? <NotFound /> : null;
};
export default OauthRedirect;
