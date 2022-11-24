import {
  TypographyPropsVariantOverrides,
  TypographyTypeMap,
} from '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1: true;
    body2: true;
    body3: true;
    body4: true;
    small1: true;
    small2: true;
    small3: true;
  }
}
