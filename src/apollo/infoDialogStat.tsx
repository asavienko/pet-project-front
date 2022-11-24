/* eslint-disable @typescript-eslint/no-use-before-define */
import { makeVar } from '@apollo/client';
import { TProps } from 'components/Dialog/ConfirmationDialog/ConfirmationDialog';

export const infoDialogConfigVar = makeVar({
  open: false,
} as TProps);

export const openInfoDialog = ({
  onButtonClick,
  onClose,
  cancelButtonText,
  onCancelClick,
  ...rest
}: Partial<TProps>) => {
  infoDialogConfigVar({
    onButtonClick: async () => {
      await onButtonClick?.();
      closeInfoDialog();
    },
    onClose: () => {
      onClose?.();
      closeInfoDialog();
    },
    onCancelClick: !cancelButtonText
      ? undefined
      : () => {
          onCancelClick?.();
          closeInfoDialog();
        },
    cancelButtonText,
    ...rest,
    open: true,
  } as TProps);
};

export const closeInfoDialog = () => {
  infoDialogConfigVar({
    ...infoDialogConfigVar(),
    open: false,
  } as TProps);

  setTimeout(() => {
    infoDialogConfigVar({ open: false } as TProps);
  }, 200);
};
