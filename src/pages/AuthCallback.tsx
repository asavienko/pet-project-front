import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LoadingLayout from '../components/Layouts/LoadingLayout';

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getQueryParams = () => {
    const query = new URLSearchParams(location.search);

    const code = query.get('code');
    const email = query.get('email');

    return { code, email };
  };

  useEffect(() => {
    const { code, email } = getQueryParams();

    if (code == null || email == null) {
      navigate('/login');
    }
  }, [location]);

  return <LoadingLayout />;
};

export default AuthCallback;
