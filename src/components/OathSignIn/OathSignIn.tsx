import React from 'react';
import Button from '@mui/material/Button/index';
import { FaGithub } from 'react-icons/fa';
import styles from './OathSignIn.module.scss';
import useTranslation from 'hooks/useTranslation';

const OathSignIn = () => {
  const { t } = useTranslation();

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
          onClick={() => {
            console.log('login action!!!');
          }}
        >
          Google
        </Button>
      </div>
    </div>
  );
};

export default OathSignIn;
