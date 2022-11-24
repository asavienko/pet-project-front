import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import cx from 'classnames';
import useMountedState from 'react-use/lib/useMountedState';

import ReactCodeInput, { ReactCodeInputProps } from 'react-code-input';

import useTranslation from '../../../hooks/useTranslation';
import { T } from '../../../i18n/translate';
import styles from './AuthenticationCodeForm.module.scss';
import Button from 'components/Buttons/Button';

const inputStyle: ReactCodeInputProps['inputStyle'] = {
  fontFamily: 'var(--fontFamily)',
  margin: '0 2px',
  MozAppearance: 'textfield',
  width: '100%',
  height: '58px',
  borderRadius: '12px',
  backgroundColor: '#F2F4F8',
  fontSize: '20px',
  fontWeight: 500,
  textAlign: 'center',
  border: 'none',
  outline: 'none',
};

type TProps = {
  onSubmit: ({ code }: { code: string }) => void;
  onResendCode: () => void;
};

const AuthenticationCodeForm: React.VFC<TProps> = ({
  onSubmit,
  onResendCode,
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const isMounted = useMountedState();
  const { t } = useTranslation();

  const handleSubmit = async (event?: any) => {
    event?.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await onSubmit({ code });
    } catch (caughtError: any) {
      setError(t({ defaultMessage: 'Please enter the correct code' }));
    }

    if (isMounted()) {
      setLoading(false);
    }
  };

  const handleResendClick = (e: any) => {
    e.preventDefault();
    onResendCode();
    setCode('');
    setError('');
  };

  const handleChange = (newCode: string) => {
    setCode(newCode);
    setError('');
  };

  const canSubmit = code.length === 6;

  useEffect(() => {
    if (canSubmit) {
      handleSubmit();
    }
  }, [canSubmit]);

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <ReactCodeInput
        type="number"
        isValid={false}
        fields={6}
        name="code"
        inputMode="numeric"
        value={code}
        onChange={handleChange}
        className={cx(styles.codeInput, error && styles.hasError)}
        inputStyle={inputStyle}
        inputStyleInvalid={inputStyle}
      />

      <div className={styles.error}>{error}</div>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        disabled={!canSubmit}
        loading={loading}
      >
        <T defaultMessage="Let's go!" />
      </Button>

      <Typography mb={3} mt={{ xs: 6, sm: 7 }} variant="body3">
        <T defaultMessage="Didn’t receive an e-mail?" />
      </Typography>

      <Typography variant="body1">
        <T
          tagName="span"
          defaultMessage="Check your Junk folder or <link>Resend e-mail</link>"
          values={{
            link: (chunks: any) => (
              <a href="#resendCode" onClick={handleResendClick}>
                {chunks}
              </a>
            ),
          }}
        />
      </Typography>
    </form>
  );
};

export default AuthenticationCodeForm;
