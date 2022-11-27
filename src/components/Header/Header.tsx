import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import LanguageSwitcher from '../LanguageSwitcher';
import ProfileMenu from '../ProfileMenu';
import Logo from '../Logo';
import styles from './Header.module.scss';
import { useUserContext } from 'context';
import { useIsMobile } from 'hooks/mediaHooks';
import MobileMenu from 'components/Layouts/PublicLayout/PublicHeader/MobileMenu';
import { ROUTES } from 'constants/routes';

const Header = () => {
  const { user, isLoggedIn } = useUserContext();
  const isMobile = useIsMobile();

  return (
    <header className={styles.root}>
      <Logo className={styles.logo} to={ROUTES.HOME} />
      <Box display={'flex'}>
        {!isMobile && (
          <LanguageSwitcher className={styles.actionButton} variant="icon" />
        )}

        {!!user && <ProfileMenu onlyPhoto={isMobile} />}

        <MobileMenu authMenu={isLoggedIn} />
      </Box>
    </header>
  );
};

export default Header;
