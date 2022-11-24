/* eslint-disable import/prefer-default-export */
import { useMediaQuery, Theme } from '@mui/material';

export const useIsDesktop = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

export const useIsBottomBarActive = () => useMediaQuery('(max-width: 1024px)');

export const useIsMobile = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
