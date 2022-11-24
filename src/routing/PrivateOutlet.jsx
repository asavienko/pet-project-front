import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import LoadingLayout from '../components/Layouts/LoadingLayout';
import { useUserContext } from '../context';
import { LOGIN_ROUTE } from '../constants/routes';
import ErrorRoute from './ErrorRoute';
import LoaderFallback from './LoaderFallback';
import { useUserQuery } from 'generated/graphql';

const PrivateOutlet = () => {
  const { user, isLoading } = useUserContext();
  const location = useLocation();

  const { data, loading } = useUserQuery({
    skip: !user,
  });

  if (isLoading || loading) {
    return <LoadingLayout />;
  }

  if (!user) {
    return (
      <Navigate
        to={{
          pathname: LOGIN_ROUTE,
          search: `?redirect=${location.pathname}${location.search || ''}`,
        }}
      />
    );
  }

  if (!data || !data.user) {
    return <ErrorRoute reason="Profile not found while user is logged in!" />;
  }

  return (
    <Suspense fallback={<LoaderFallback />}>
      <Outlet />
    </Suspense>
  );
};

export default PrivateOutlet;
