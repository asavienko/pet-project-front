import React, { ReactNode } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '../Icons/CloseIcon';

type TProps = {
  onClose: () => void;
  title?: ReactNode;
};

const ModalHeader: React.VFC<TProps> = ({ onClose, title }) => (
  <Box
    display={'flex'}
    justifyContent={'space-between'}
    pt={5}
    pb={3}
    pl={5}
    pr={3}
    alignItems={'center'}
    sx={{ boxShadow: '0px 2px 5px rgb(0 13 80 / 4%)' }}
  >
    <Typography variant={'h6'}>{title}</Typography>
    <IconButton color={'error'} onClick={onClose as () => void}>
      <CloseIcon />
    </IconButton>
  </Box>
);

export default ModalHeader;
