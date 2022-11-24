import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/templates/Login';
import { useUserContext } from '../context';
import { ROUTES } from '../constants/routes';

const Authentication = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async (credentials: any) => {
    await login(credentials);
    navigate(ROUTES.OAUTH_REDIRECT);
  };

  return <Login onSubmit={handleLogin} />;
};

export default Authentication;
