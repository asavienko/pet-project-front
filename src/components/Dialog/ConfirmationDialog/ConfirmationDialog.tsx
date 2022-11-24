import React, { useEffect, useState } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { RiCloseLine } from 'react-icons/ri';
import IconBlock from '../../IconBlock';
import Button from 'components/Buttons/Button';

export type TProps = {
  icon: 'info' | 'success' | 'delete' | 'confirmation' | 'error';
  title: React.ReactNode;
  buttonText: React.ReactNode;
  cancelButtonText?: React.ReactNode;
  contentContainerProps?: any;
  closeable?: boolean;
  onClose?: () => void;
  onButtonClick?: () => Promise<any> | void;
  onCancelClick?: () => void;
} & Omit<Omit<DialogProps, 'title'>, 'onClose'>;

const ConfirmationDialog: React.FC<TProps> = (props) => {
  const {
    title,
    children,
    buttonText,
    cancelButtonText,
    onButtonClick,
    onCancelClick,
    onClose,
    icon,
    maxWidth = 'xs',
    contentContainerProps,
    closeable,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    await onButtonClick?.();
  };

  useEffect(() => {
    setLoading(false);
  }, [rest.open]);

  return (
    <Dialog {...rest} maxWidth={maxWidth}>
      {closeable && (
        <IconButton
          color="warning"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <RiCloseLine fontSize={24} />
        </IconButton>
      )}

      <Box p={7}>
        {icon && <IconBlock variant={icon} mb={5} />}
        <Typography variant="body4" textAlign="center" mb={3}>
          {title}
        </Typography>
        <Box textAlign="center" {...contentContainerProps}>
          <Typography variant="body2">{children}</Typography>

          <Box display="flex" mt={5}>
            {onCancelClick && (
              <Button
                onClick={onCancelClick}
                fullWidth
                size="medium"
                color="secondary"
                sx={{ mr: 5 }}
              >
                {cancelButtonText}
              </Button>
            )}
            {buttonText && onButtonClick && (
              <Button
                onClick={handleButtonClick}
                fullWidth
                size="medium"
                loading={loading}
              >
                {buttonText}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ConfirmationDialog;
