import { Navigate, Outlet } from 'react-router-dom';

import LoadingLayout from '../components/Layouts/LoadingLayout';
import { useUserContext } from '../context';
import { AFTER_LOGIN_ROUTE, ROUTES } from '../constants/routes';

const RegistrationOutlet = () => {
  const { user, isLoading } = useUserContext();

  if (isLoading) {
    return <LoadingLayout />;
  }

  if (!user) {
    return (
      <Navigate
        to={{
          pathname: ROUTES.LOGIN,
        }}
      />
    );
  }

  if (user.isFinished) {
    return (
      <Navigate
        to={{
          pathname: AFTER_LOGIN_ROUTE,
        }}
      />
    );
  }

  return <Outlet />;
};

export default RegistrationOutlet;
