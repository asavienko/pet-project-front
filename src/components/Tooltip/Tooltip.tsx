import React, { useState } from 'react';
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip: React.VFC<TooltipProps> = ({
  onOpen,
  onClose,
  children,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  // TODO: use children map if you have an issue with tooltip
  const updatedChildren = React.cloneElement(children, {
    onClick: (...args: any) => {
      setOpen(!open);
      children.props?.onClick?.(...args);
    },
  });

  return (
    <MuiTooltip
      {...rest}
      open={open}
      disableTouchListener
      onOpen={(e) => {
        setOpen(true);
        onOpen?.(e);
      }}
      onClose={(e) => {
        setOpen(false);
        onClose?.(e);
      }}
    >
      {updatedChildren as any}
    </MuiTooltip>
  );
};

export default Tooltip;
