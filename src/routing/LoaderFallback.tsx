import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const LoaderFallback = () => {
  const [loading, setLoading] = useState(false);

  // we use service worker which returns chunks in few miliseconds. That's why we have some small delay before we show loader
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(true);
    }, 50);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <Loader position="fixed" loading={loading} withLogo />;
};

export default LoaderFallback;
