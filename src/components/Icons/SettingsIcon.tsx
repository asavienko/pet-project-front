import React from 'react';
import { createSvgIcon } from '@mui/material';

const SettingsIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 2.474L23 12L17.5 21.526H6.5L1 12L6.5 2.474H17.5ZM8.634 8.17L13.634 16.83L15.366 15.83L10.366 7.17L8.634 8.17Z"
      fill="currentColor"
    />
  </svg>,
  'Settings'
);

export default SettingsIcon;
