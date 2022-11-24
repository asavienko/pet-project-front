import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../Logo';
import LanguageSwitcher from '../../../LanguageSwitcher';
import NavigationMenu from './NavigationMenu';
import MobileMenu from './MobileMenu';
import styles from './PublicHeader.module.scss';
import { ROUTES } from 'constants/routes';
import { T } from 'i18n/translate';

const PublicHeader = () => (
  <div className={styles.container}>
    <Logo className={styles.logo} />
    <NavigationMenu />

    <div className={styles.rightContainer}>
      <LanguageSwitcher variant={'text'} className={styles.languageSwitcher} />
      <Link to={ROUTES.LOGIN}>
        <Button
          color="secondary"
          variant={'contained'}
          className={styles.signInButton}
        >
          <T id="common.signIn" defaultMessage={'Sign In'} />
        </Button>
      </Link>
      <MobileMenu />
    </div>
  </div>
);

export default PublicHeader;
