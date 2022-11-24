import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { RiCloseLine } from 'react-icons/ri';
import { SnackbarKey, useSnackbar } from 'notistack';

type TProps = {
  snackbarKey: SnackbarKey;
};

const SnackbarCloseButton: React.VFC<TProps> = ({ snackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton
      color={'warning'}
      size={'medium'}
      onClick={() => closeSnackbar(snackbarKey)}
    >
      <RiCloseLine color="#fff" />
    </IconButton>
  );
};

export default SnackbarCloseButton;
