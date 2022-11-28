import React from 'react';
import cx from 'classnames';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import styles from './SocialButtons.module.scss';
import useTranslation from 'hooks/useTranslation';
import { INSTAGRAM_LINK, LINKEDIN_LINK } from 'constants/app';

const IconLink = IconButton as any;

type TProps = {
  className?: string;
};

const SocialButtons: React.FC<TProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cx(styles.root, className)}>
      <IconLink
        LinkComponent="a"
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        sx={{ ml: 5, mr: 5 }}
        title={t({ defaultMessage: 'Anton Savienko LinkedIn profile' })}
      >
        <InstagramIcon fontSize="inherit" />
      </IconLink>

      <IconLink
        LinkComponent="a"
        href={LINKEDIN_LINK}
        target="_blank"
        rel="noreferrer"
        title={t({ defaultMessage: 'LinkedIn profile' })}
      >
        <LinkedInIcon fontSize="inherit" />
      </IconLink>
    </div>
  );
};

export default SocialButtons;
