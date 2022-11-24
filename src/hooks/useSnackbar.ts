import React from 'react';
import { OptionsObject, useSnackbar } from 'notistack';

// eslint-disable-next-line import/prefer-default-export
export const useErrorSnackbar = () => {
  const snackbar = useSnackbar();

  const enqueueSnackbar = (
    message: React.ReactNode,
    options?: OptionsObject | undefined
  ) => {
    snackbar.enqueueSnackbar(message, { variant: 'error', ...options });
  };

  return {
    ...snackbar,
    enqueueSnackbar,
  };
};
