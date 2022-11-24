import React, { useEffect } from 'react';
import { useFormState } from 'react-hook-form';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { usePrevious } from 'react-use';
import { useDialogWithCloseConfirmationContext } from './DialogWithCloseConfirmation';
import { T } from 'i18n/translate';
import Button from 'components/Buttons/Button';

type TProps = {
  title?: React.ReactNode;
};

const PreventCloseDialog: React.VFC<TProps> = ({ title }) => {
  const { open, onCancel, onConfirm } = useDialogWithCloseConfirmationContext();

  const { isDirty, isSubmitSuccessful } = useFormState();

  const prevOpen = usePrevious(open);
  useEffect(() => {
    if (isSubmitSuccessful) {
      onConfirm();
    }

    if (open && !prevOpen && !isDirty) {
      onConfirm();
    }
  }, [open, isDirty, isSubmitSuccessful]);

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>
        {title || <T defaultMessage="Are you sure you want to close modal?" />}
      </DialogTitle>

      <DialogActions>
        <Button onClick={onCancel} variant="contained" color={'inherit'}>
          <T defaultMessage="Cancel" />
        </Button>
        <Button onClick={onConfirm}>
          <T defaultMessage="Close" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PreventCloseDialog;
