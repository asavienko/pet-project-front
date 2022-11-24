import React from 'react';
import Button from '@mui/material/Button/index';
import { FaGithub } from 'react-icons/fa';
// @ts-ignore
import GitHubLogin from 'react-github-login';
import { useUserContext } from '../../context';
import styles from './OathSignIn.module.scss';
import useTranslation from 'hooks/useTranslation';

const OathSignIn = () => {
  const { t } = useTranslation();
  const { login } = useUserContext();

  const onSuccessGithub = (response: any) => {
    login(response);
  };

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>
        {t({ defaultMessage: 'Continue with:' })}
      </h4>

      <div className={styles.buttonsContainer}>
        <Button
          size="large"
          className={styles.button}
          startIcon={<FaGithub fontSize="large" />}
        >
          <GitHubLogin
            onSuccess={onSuccessGithub}
            buttonText="Login with GitHub"
            className="clear"
            valid={true}
            clientId={import.meta.env.VITE_GITHUB_CLIENT_ID}
            redirectUri={import.meta.env.VITE_OAUTH_REDIRECT}
          />
        </Button>
      </div>
    </div>
  );
};

export default OathSignIn;
