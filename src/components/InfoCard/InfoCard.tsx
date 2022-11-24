import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styles from './InfoCard.module.scss';
import Button from 'components/Buttons/Button';

type TProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  buttonText?: React.ReactNode;
  onButtonClick?: () => void;
  children?: React.ReactNode;
};

const InfoCard: React.FC<TProps> = ({
  icon,
  title,
  children,
  buttonText,
  onButtonClick,
}) => (
  <Box className={styles.root}>
    {icon && <div className={styles.iconContainer}>{icon}</div>}
    <div className={styles.content}>
      {title && (
        <Typography variant="body4" mb={3}>
          {title}
        </Typography>
      )}
      {children && (
        <Typography variant="body1" mb={3} color="#656C7B">
          {children}
        </Typography>
      )}
    </div>

    {onButtonClick && (
      <Button size="medium" color="primary" onClick={onButtonClick}>
        {buttonText}
      </Button>
    )}
  </Box>
);

export default InfoCard;
