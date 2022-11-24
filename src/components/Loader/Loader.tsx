/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

import { Typography } from '@mui/material';
import { StyledLoaderWrapper } from './styles';
import Logo from 'components/Logo';

type TProps = {
  loading: boolean;
  position?: 'absolute' | 'fixed' | 'static';
  size?: CircularProgressProps['size'];
  withLogo?: boolean;
  color?: CircularProgressProps['color'];
  loadingText?: React.ReactNode;
};

const Loader: React.VFC<TProps> = (props) => {
  const {
    loading,
    color,
    position = 'fixed',
    size,
    withLogo = false,
    loadingText,
  } = props;

  if (!loading) return null;

  return (
    <StyledLoaderWrapper position={position} withLogo={withLogo}>
      {withLogo && <Logo noLink />}
      {loadingText && (
        <Typography variant="h3" my={7}>
          {loadingText}
        </Typography>
      )}
      <CircularProgress size={size} sx={{ mt: 6 }} color={color} />
    </StyledLoaderWrapper>
  );
};

export default Loader;
