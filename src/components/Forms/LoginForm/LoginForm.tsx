import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import useTranslation from '../../../hooks/useTranslation';
import TextFieldController from '../../Controllers/TextFieldController';

type TProps = {
  onSubmit: (values: { email: string }) => void;
};

const LoginForm: React.FC<TProps> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(t({ defaultMessage: 'Please enter email' }) as any),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        name="email"
        label={t({ defaultMessage: 'Email' })}
        placeholder={t({ defaultMessage: 'E-mail address' })}
        type="email"
        autoComplete="username"
        control={control}
        aria-required="true"
      />
      <input
        className="so-move-off-screen"
        name="password"
        type="password"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        value=" "
      />
      <Box mt={6}>
        <Button type="submit" variant="contained" fullWidth size="large">
          {t({ defaultMessage: 'Continue with e-mail' })}
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
