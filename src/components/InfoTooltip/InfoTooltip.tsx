import React, { useState } from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { RiInformationFill } from 'react-icons/ri';

type TProps = {
  children: TooltipProps['title'];
  className?: string;
};

const InfoTooltip: React.VFC<TProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false);

  if (!children) return null;

  return (
    <Tooltip
      title={children}
      open={open}
      disableTouchListener
      onOpen={() => setOpen(true)}
      onClose={() => {
        setOpen(false);
      }}
    >
      <IconButton
        color={'primary'}
        size={'small'}
        sx={{ marginLeft: 2 }}
        className={className}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <RiInformationFill color="#BAC6DE" />
      </IconButton>
    </Tooltip>
  );
};

export default InfoTooltip;
