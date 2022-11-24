import { TypedDocumentNode, useMutation } from '@apollo/client';
import { MutationHookOptions } from '@apollo/client/react/types/types';
import { DocumentNode } from 'graphql';
import { useSnackbar } from 'notistack';

import useTranslation from './useTranslation';

const useMutationWrapper = (
  query: DocumentNode | TypedDocumentNode,
  { onError, ...options }: MutationHookOptions = {}
) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const customOptions: MutationHookOptions = { ...options };

  customOptions.onError = (error): void => {
    if (error.networkError) {
      enqueueSnackbar(
        t({ defaultMessage: 'Problems with internet connection' }),
        {
          variant: 'error',
        }
      );
      return;
    }

    if (error.message) {
      enqueueSnackbar(
        "Uh-Oh... An unexpected error occurred, don't worry, we are on it. In the mean time,  please try again...",
        { variant: 'error' }
      );
    } else if (error.clientErrors || error.graphQLErrors) {
      enqueueSnackbar(
        t({
          defaultMessage:
            "Uh-Oh... An unexpected error occurred, don't worry, we are on it. In the mean time,  please try again...",
        }),
        {
          variant: 'error',
        }
      );
    }

    if (onError) onError(error);
  };

  return useMutation(query, customOptions);
};

export default useMutationWrapper;
