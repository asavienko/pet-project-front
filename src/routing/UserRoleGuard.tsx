import React from 'react';
import { Outlet } from 'react-router-dom';

import { useUserContext } from '../context';
import { T } from 'i18n/translate';

const UserRoleGuard: React.FC = () => {
  const { user } = useUserContext();

  if (!user) {
    return <T defaultMessage="Access denied" />;
  }

  return <Outlet />;
};

export default UserRoleGuard;
