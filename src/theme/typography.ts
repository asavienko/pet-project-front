import { Palette } from '@mui/material/styles/createPalette';
import { TypographyOptions } from '@mui/material/styles/createTypography';

// eslint-disable-next-line import/prefer-default-export
export const typography:
  | TypographyOptions
  // eslint-disable-next-line no-unused-vars
  | ((palette: Palette) => TypographyOptions) = {
  fontFamily: 'var(--fontFamily)',
  button: {
    fontWeight: 500,
    textTransform: 'none',
  },
};
