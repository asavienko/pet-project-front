import React, { useState } from 'react';
import { Button, CircularProgress, Menu, MenuItem } from '@mui/material';
import DotsHorizontalIcon from 'components/Icons/DotsHorizontalIcon';
import { openInfoDialog } from 'apollo/infoDialogStat';
import { T } from 'i18n/translate';

export type TActionItem = {
  onClick: () => void;
  label: React.ReactNode;
  confirmMessage?: React.ReactNode;
};

type TProps = {
  items: TActionItem[];
  loading?: boolean;
};

const ActionsButton = ({ loading, items }: TProps) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleOpen = (element: null | HTMLElement) => {
    setAnchorEl(element);
    setOpen(true);
  };

  return (
    <>
      <Button
        aria-haspopup
        disableElevation
        variant="outlined"
        disabled={loading}
        onClick={(event: any) => handleOpen(event.currentTarget)}
      >
        {loading ? <CircularProgress size={20} /> : <DotsHorizontalIcon />}
      </Button>

      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {items.map(({ label, onClick, confirmMessage }, idx) => {
          const handleClick = () => {
            handleClose();

            if (!confirmMessage) {
              onClick?.();
              return;
            }

            openInfoDialog({
              icon: 'confirmation',
              title: confirmMessage,
              buttonText: <T defaultMessage="Yes" />,
              cancelButtonText: <T defaultMessage="No" />,
              onButtonClick: () => onClick?.(),
            });
          };

          return (
            <MenuItem key={idx} onClick={handleClick}>
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ActionsButton;
