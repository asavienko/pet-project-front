import React from 'react';
import Typography from '@mui/material/Typography/index';

import { T } from '../../../i18n/translate';
import AuthenticationCodeForm from '../../Forms/AuthenticationCodeForm';
import styles from './ConfirmationCode.module.scss';

type TProps = {
  onSubmit: ({ code }: { code: string }) => void;
  onResendCode: () => void;
};

const ConfirmationCode: React.VFC<TProps> = ({ onSubmit, onResendCode }) => (
  <div className={styles.root}>
    <Typography variant="h1" color="primary" mb={7}>
      <T defaultMessage="Verification" />
    </Typography>

    <Typography variant="body3" mb={{ xs: 5, sm: 6 }}>
      <T
        defaultMessage="A verification code was sent to your e-mail. Enter  this code to continue."
        values={{
          br: () => <br />,
        }}
      />
    </Typography>
    <AuthenticationCodeForm onSubmit={onSubmit} onResendCode={onResendCode} />
  </div>
);

export default ConfirmationCode;
