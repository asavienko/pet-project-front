import React, { useEffect, useState, createContext, useContext } from 'react';
import { usePrevious } from 'react-use';

import Dialog, { DialogProps } from '@mui/material/Dialog';

type TProps = {
  toggleOpen: (open: boolean) => void;
} & DialogProps;

type TContext = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const DialogWithCloseConfirmationContext = createContext({} as TContext);

const DialogWithCloseConfirmation: React.FC<TProps> = ({
  open,
  toggleOpen,
  ...rest
}) => {
  const [confirmCloseDialogOpen, setConfirmCloseDialogOpen] = useState<
    boolean | 'accepted'
  >(false);
  const [calculatedOpen, setCalculatedOpen] = useState(false);

  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen && !open) {
      // prevent dialog from closing
      setConfirmCloseDialogOpen(true);
      return;
    }

    setCalculatedOpen(open);
  }, [open]);

  const handleConfirm = () => {
    setConfirmCloseDialogOpen('accepted');
  };

  useEffect(() => {
    if (confirmCloseDialogOpen === 'accepted') {
      toggleOpen(false);
      setConfirmCloseDialogOpen(false);
      setCalculatedOpen(false);
    }
  }, [confirmCloseDialogOpen]);

  return (
    <DialogWithCloseConfirmationContext.Provider
      value={{
        open: confirmCloseDialogOpen === true,
        onConfirm: handleConfirm,
        onCancel: () => {
          setConfirmCloseDialogOpen(false);
          setCalculatedOpen(true);
          toggleOpen(true);
        },
      }}
    >
      <Dialog
        open={calculatedOpen || confirmCloseDialogOpen === true}
        {...rest}
      />
    </DialogWithCloseConfirmationContext.Provider>
  );
};

export const useDialogWithCloseConfirmationContext = () =>
  useContext(DialogWithCloseConfirmationContext);

export default DialogWithCloseConfirmation;
