import { Navigate, Outlet } from 'react-router-dom';

import { useSearchParam } from 'react-use';
import LoadingLayout from '../components/Layouts/LoadingLayout';
import { useUserContext } from '../context';
import { AFTER_LOGIN_ROUTE } from '../constants/routes';

const LoginOutlet = () => {
  const { user, isLoading } = useUserContext();
  const redirect = useSearchParam('redirect');

  if (isLoading) {
    return <LoadingLayout />;
  }

  if (user) {
    return (
      <Navigate
        to={{
          pathname: redirect || AFTER_LOGIN_ROUTE,
        }}
      />
    );
  }

  return <Outlet />;
};

export default LoginOutlet;
