import copyToClipboard from 'copy-to-clipboard';
import { useSnackbar } from 'notistack';
import useTranslation from './useTranslation';

const useCopyToClipboard = (defaultUrl?: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const copy = (copyUrl?: string) => {
    const url = copyUrl || defaultUrl;

    if (!url) return;

    copyToClipboard(url);

    enqueueSnackbar(t({ defaultMessage: 'Copied!' }), {
      variant: 'default',
      autoHideDuration: 3000,
    });
  };

  return {
    copy,
  };
};

export default useCopyToClipboard;
