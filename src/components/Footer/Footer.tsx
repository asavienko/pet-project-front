import React from 'react';
import cx from 'classnames';

import { Theme, useMediaQuery } from '@mui/material';
import LanguageSwitcher from '../LanguageSwitcher';
import SocialButtons from '../SocialButtons';
import styles from './Footer.module.scss';

type TProps = {
  className?: string;
  fullWidth?: boolean;
  disableTopMargin?: boolean;
};

const Footer: React.VFC<TProps> = ({ className, fullWidth }) => {
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <>
      <footer
        className={cx(styles.root, fullWidth && styles.fullWidth, className)}
      >
        <div className={styles.socialContainer}>
          {!isSmallDevice && (
            <LanguageSwitcher variant="text" languageVersion="short" />
          )}
          <SocialButtons className={styles.socialButtons} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
