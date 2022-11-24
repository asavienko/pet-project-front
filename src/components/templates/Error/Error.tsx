import React from 'react';
import { Typography } from '@mui/material';
import { T } from '../../../i18n/translate';
import styles from './Error.module.scss';
import Logo from 'components/Logo';
import { Container } from 'components/Layouts/PublicLayout';

type TProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  text?: React.ReactNode;
  hideLogo?: boolean;
};

const Error: React.VFC<TProps> = (props) => {
  const {
    icon,
    title = <T id="common.error" defaultMessage="Error" />,
    subTitle = (
      <T
        id="reactError.generalError.title"
        defaultMessage="Uh-Oh... An unexpected error occurred, don't worry, we are on it. In the mean time, please try again..."
      />
    ),
    text,
    hideLogo = true,
  } = props;

  return (
    <div className={styles.root}>
      {!hideLogo && <Logo className={styles.logo} />}

      <Container>
        <h1 className={styles.text404}>
          {icon}
          {title}
        </h1>
        <Typography variant="h3" component="h2" mt={-6} mb={3}>
          {subTitle}
        </Typography>
        <Typography variant="body3">{text}</Typography>
      </Container>
    </div>
  );
};

export default Error;
