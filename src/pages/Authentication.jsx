import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/templates/Login';
import { useUserContext } from '../context';
import { ROUTES } from '../constants/routes';

const Authentication = () => {
  const { login } = useUserContext();
  const { navigate } = useNavigate();

  const handleLogin = async (credentials) => {
    await login(credentials);
    navigate(ROUTES.OATH_REDIRECT);
  };

  return <Login onSubmit={handleLogin} />;
};

export default Authentication;
