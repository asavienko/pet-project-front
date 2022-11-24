import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import styles from './BaseDialog.module.scss';
import Button from 'components/Buttons/Button';
import { T } from 'i18n/translate';
import CloseIcon from 'components/Icons/CloseIcon';

type TProps = Omit<DialogProps, 'title'> & {
  title: React.ReactNode;
  actions?: React.ReactNode;
  submitText?: React.ReactNode;
  submitLoading?: boolean;
  onClose?: (event: any, reason?: 'backdropClick' | 'escapeKeyDown') => void;
  onSubmit?: () => void;
};

const BaseDialog: React.VFC<TProps> = ({
  children,
  submitText,
  onClose,
  onSubmit,
  actions,
  title,
  submitLoading,
  ...rest
}) => (
  <Dialog fullWidth maxWidth="sm" onClose={onClose} {...rest}>
    <div className={styles.titleContainer}>
      <DialogTitle className={styles.title}>{title}</DialogTitle>
      <IconButton
        color="primary"
        onClick={onClose}
        className={styles.closeButton}
      >
        <CloseIcon />
      </IconButton>
    </div>

    <DialogContent className={styles.content}>{children}</DialogContent>

    <DialogActions className={styles.footer}>
      {onClose && !actions && (
        <Button onClick={onClose} color={onSubmit ? 'secondary' : 'primary'}>
          <T defaultMessage="Close" />
        </Button>
      )}

      {onSubmit && !actions && (
        <Button onClick={onSubmit} loading={submitLoading}>
          {submitText}
        </Button>
      )}
      {actions}
    </DialogActions>
  </Dialog>
);

export default BaseDialog;
