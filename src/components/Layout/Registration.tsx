import React from 'react';

import { Link } from 'react-router-dom';
import { T } from '../../i18n/translate';
import Button from '../Buttons/Button';
import ArrowDropLeft from '../Icons/ArrowDropLeft';
import styles from './Registration.module.scss';

type TProps = {
  previousStepUrl?: string;
  children?: React.ReactNode;
};

const Registration: React.FC<TProps> = ({ children, previousStepUrl }) => (
  <div className={styles.root}>
    {previousStepUrl && (
      <Button
        to={previousStepUrl}
        component={Link}
        size="medium"
        startIcon={<ArrowDropLeft />}
        className={styles.button}
        variant="text"
      >
        <T defaultMessage="Back" />
      </Button>
    )}
    {children}
  </div>
);

export default Registration;
