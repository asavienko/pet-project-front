import { createTheme, ThemeOptions } from '@mui/material/styles';

import * as components from './components';
import palette from './palette';
import { typography } from './typography';

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const themeOptions: ThemeOptions = {
  spacing: [0, 2, 4, 8, 12, 16, 24, 32],
  palette,
  breakpoints: {
    values: breakpoints,
  },
  typography,
};

const tempTheme = createTheme(themeOptions);

// eslint-disable-next-line import/prefer-default-export
export const theme = createTheme({
  ...themeOptions,
  components: Object.keys(components)
    .map((key) => {
      const component = (components as any)[key];

      if (typeof component === 'function') {
        return [key, component(tempTheme)];
      }

      return [key, component];
    })
    .reduce((acc, [key, component]) => ({ ...acc, [key]: component }), {}),
});
