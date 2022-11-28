import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/templates/Login';
import { ROUTES } from '../constants/routes';

const Authentication = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials: any) => {
    navigate(ROUTES.OAUTH_REDIRECT);
  };

  return <Login onSubmit={handleLogin} />;
};

export default Authentication;
