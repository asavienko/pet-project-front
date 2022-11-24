import React from 'react';
import IconButton from '@mui/material/IconButton';

import MoonIcon from '../Icons/MoonIcon';

type TProps = {
  className?: string;
};

const ThemeSwitcher: React.VFC<TProps> = (props) => (
  <IconButton {...props}>
    <MoonIcon />
  </IconButton>
);

export default ThemeSwitcher;
