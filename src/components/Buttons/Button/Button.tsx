import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button/index';

import { StyledProgress, Text } from './styles';

export type TButtonProps<C extends React.ElementType> = {
  loading?: boolean;
} & ButtonProps<C, { component?: C }>;

export const Button = <C extends React.ElementType>({
  loading,
  children,
  sx,
  size,
  variant = 'contained',
  ...props
}: TButtonProps<C>) => {
  const loaderSize = size === 'large' ? 30 : 22;

  return (
    <MuiButton
      {...props}
      size={size}
      variant={variant}
      sx={{
        pointerEvents: loading ? 'none' : undefined,
        ...sx,
      }}
    >
      <>
        {loading && (
          <StyledProgress size={loaderSize} thickness={5} color="inherit" />
        )}
        <Text transparent={loading}>{children}</Text>
      </>
    </MuiButton>
  );
};

export default Button;
