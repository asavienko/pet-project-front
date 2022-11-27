import React from 'react';
import Button from '@mui/material/Button/index';
import { FaGithub } from 'react-icons/fa';
// @ts-ignore
import GitHubLogin from 'react-github-login';
import OauthPopup from 'react-oauth-popup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { GITHUB_AUTH_LOGIN_URL } from '../../constants/app';
import Loader from '../Loader';
import { useSsoMutation } from '../../generated/graphql';
import { useUserContext } from '../../context';
import { T } from '../../i18n/translate';
import { setToken } from '../../utils/token';
import styles from './OathSignIn.module.scss';
import useTranslation from 'hooks/useTranslation';

const OathSignIn = () => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();
  const [ssoMutation, { loading }] = useSsoMutation({
    onError: () => {
      t({ defaultMessage: 'Authorization failed' });
    },
  });

  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const getSignInLink = () => {
    const params = new URLSearchParams();
    // @ts-ignore
    params.set('client_id', import.meta.env.VITE_GITHUB_CLIENT_ID);
    // @ts-ignore
    params.set('redirect_uri', import.meta.env.VITE_OAUTH_REDIRECT);
    return `${GITHUB_AUTH_LOGIN_URL}?${params.toString()}`;
  };

  const onCode = (code: string) => {
    ssoMutation({
      variables: { input: { code } },
      onCompleted: (data) => {
        setUser(data?.sso);
        enqueueSnackbar(
          <T
            defaultMessage="Hi {name} you successfully login"
            values={{ name: data?.sso?.name }}
          />
        );
        setToken(data?.sso?.token || '');
        navigate('/');
      },
      onError: () => {
        enqueueSnackbar(
          t({ defaultMessage: 'Something went wrong. Try again.' })
        );
      },
    });
  };

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>
        {t({ defaultMessage: 'Continue with:' })}
      </h4>
      <Loader loading={loading} />
      <div className={styles.buttonsContainer}>
        <OauthPopup
          url={getSignInLink()}
          onCode={onCode}
          width={500}
          height={500}
          onClose={() => console.log('Sign in window is closed')}
          title={'Github Auth'}
        >
          <Button
            size="large"
            className={styles.button}
            startIcon={<FaGithub fontSize="large" />}
          >
            {t({ defaultMessage: 'GitHub' })}
          </Button>
        </OauthPopup>
      </div>
    </div>
  );
};

export default OathSignIn;
