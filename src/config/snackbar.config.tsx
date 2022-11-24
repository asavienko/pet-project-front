import { SnackbarProviderProps } from 'notistack';
import { RiErrorWarningLine } from 'react-icons/ri';
import SnackbarCloseButton from 'components/SnackbarCloseButton';
import { ONE_SECOND } from 'constants/index';

export const snackbarConfig: Omit<SnackbarProviderProps, 'children'> = {
  maxSnack: 3,
  autoHideDuration: 8 * ONE_SECOND,
  action: (key) => <SnackbarCloseButton snackbarKey={key} />,
  iconVariant: {
    error: <RiErrorWarningLine fontSize={20} style={{ marginRight: 4 }} />,
  },
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top',
  },
};
