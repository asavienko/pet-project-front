import { createSvgIcon } from '@mui/material';

const SortIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5022_17758)">
      <path
        d="M7.99984 3.828L5.17184 6.657L3.75684 5.243L7.99984 1L12.2428 5.243L10.8278 6.657L7.99984 3.828Z"
        fill="currentColor"
      />
      <path
        d="M7.99984 12.172L5.17184 9.343L3.75684 10.757L7.99984 15L12.2428 10.757L10.8278 9.343L7.99984 12.172Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_5022_17758">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>,
  'Sort'
);

export default SortIcon;
