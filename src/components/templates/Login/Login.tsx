import React from 'react';
import Typography from '@mui/material/Typography/index';

import useTranslation from '../../../hooks/useTranslation';
import LoginForm from '../../Forms/LoginForm';
import OathSignIn from '../../OathSignIn';
import styles from './Login.module.scss';

type TProps = {
  onSubmit: (values: { email: string }) => void;
};

const Login: React.VFC<TProps> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography variant="h1" color="primary" textAlign="center">
        {t({ defaultMessage: 'Sign In' })}
      </Typography>
      <OathSignIn />
      <div className={styles.formContainer}>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
