import React, { memo } from 'react';
import { UseControllerProps, useFieldArray, useWatch } from 'react-hook-form';
import { IconButton } from '@mui/material';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import TextFieldController from '../TextFieldController';

import styles from './EmailFieldsController.module.scss';
import useTranslation from 'hooks/useTranslation';

type TProps = {
  maxEmails?: number;
  maxEmailsWarning?: string;
  label: string;
  button?: (args: {
    onClick: any;
    fields: any;
    disabled: boolean;
  }) => React.ReactNode;
} & UseControllerProps<any>;

const EmailFieldsController: React.VFC<TProps> = memo(
  ({ maxEmails, maxEmailsWarning, control, name, label, button }) => {
    const { fields, append, remove } = useFieldArray({
      control,
      name,
    } as any);

    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();
    const watchFieldArray = useWatch({
      control,
      name,
    });

    const reachedMaxEmails = maxEmails && fields.length >= maxEmails;
    const hasEmptyField = Boolean(
      watchFieldArray.find((field: any) => !(field as any).value)
    );

    const handleAdd = () => {
      if (reachedMaxEmails) {
        enqueueSnackbar(maxEmailsWarning, {
          variant: 'warning',
          id: 'maxGuestsWarning',
          preventDuplicate: true,
        });
        return;
      }

      if (hasEmptyField) {
        enqueueSnackbar(
          t({
            defaultMessage:
              'Fill all empty guest emails fields before adding new one',
          }),
          {
            variant: 'warning',
            id: 'emptyFieldWarning',
            preventDuplicate: true,
          }
        );
        return;
      }

      append({ value: '' });
    };

    return (
      <>
        {fields.map((field, idx) => (
          <Box
            key={field.id}
            className={styles.fieldContainer}
            mt={idx === 0 ? 6 : 0}
          >
            <TextFieldController
              key={field.id}
              label={idx === 0 ? label : undefined}
              control={control}
              name={`${name}.${idx}.value`}
            />
            <IconButton
              onClick={() => remove(idx)}
              type="button"
              color="warning"
            >
              <RiDeleteBin2Line color="#FB0000" size={20} />
            </IconButton>
          </Box>
        ))}
        {button &&
          button({
            onClick: handleAdd,
            fields,
            disabled: hasEmptyField,
          })}
      </>
    );
  }
);

export default EmailFieldsController;
