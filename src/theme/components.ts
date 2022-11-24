import { Components, Theme } from '@mui/material/styles';

export const MuiButton = (theme: Theme): Components['MuiButton'] => ({
  styleOverrides: {
    root: {
      borderRadius: 12,
      padding: '0 24px',
      height: 40,
      '&.Mui-disabled': {
        background: '#F2F4F8',
        color: '#BAC6DE',
      },
      '&.Mui-disabled.MuiButton-outlined': {
        background: 'transparent',
        boxShadow: 'none',
      },
      '&.MuiButton-textSizeLarge svg': {
        fontSize: 32,
      },
      '.MuiButton-startIcon.MuiButton-iconSizeLarge': {
        marginRight: 10,
      },
    },
    sizeLarge: {
      height: 58,
      padding: '0 28px',
      fontSize: 20,

      [theme.breakpoints.down('sm')]: {
        height: 48,
        fontSize: '0.875rem',
        borderRadius: 12,
      },
    },
    sizeMedium: {
      height: 48,
      padding: '0 24px',
      fontSize: 14,
    },
    contained: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
    },

    startIcon: { transition: 'none', '*': { transition: 'none' } },
  },
  variants: [
    {
      props: {
        variant: 'outlined',
        color: 'error',
      },
      style: {
        border: '1px solid var(--color-danger)',
        color: 'var(--color-danger)',

        '&:hover': {
          background: 'var(--color-danger)',
          border: '1px solid var(--color-danger)',
          color: '#fff',
        },
        '&:hover:focus': {
          color: '#fff',
        },
      },
    },
  ],
});
