import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
import { ROUTES_MAP } from 'constants/routes';

const RoutesListener = () => {
  const location = useLocation();

  const routesAuthConfig = useMemo(
    () =>
      Object.values(ROUTES_MAP).reduce((acc, route) => {
        acc[route.path] = route.auth;
        return acc;
      }, {} as Record<string, boolean>),
    []
  );

  useEffect(() => {
    if (routesAuthConfig[location.pathname]) {
      document.body.classList.remove('so-public-route');
      document.body.classList.add('so-auth-route');
    } else {
      document.body.classList.add('so-public-route');
      document.body.classList.remove('so-auth-route');
    }
  }, [routesAuthConfig[location.pathname]]);

  return null;
};

export default RoutesListener;
