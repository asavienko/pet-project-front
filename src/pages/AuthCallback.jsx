import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LoadingLayout from '../components/Layouts/LoadingLayout';
import { useUserContext } from '../context';

const AuthCallback = () => {
  const { answerCustomChallenge } = useUserContext();
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
      return;
    }

    answerCustomChallenge({ code, email });
  }, [location]);

  return <LoadingLayout />;
};

export default AuthCallback;
