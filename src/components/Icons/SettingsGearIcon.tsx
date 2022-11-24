import { createSvgIcon } from '@mui/material';

const SettingsGearIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33398 12.6667V10.0001L1.33398 8.00008L3.33398 6.00008V3.33341H6.00065L8.00065 1.33341L10.0007 3.33341H12.6673V6.00008L14.6673 8.00008L12.6673 10.0001V12.6667H10.0007L8.00065 14.6667L6.00065 12.6667H3.33398Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r="2"
      transform="matrix(1 0 0 -1 8 8)"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'Settings'
);

export default SettingsGearIcon;
