import React, { SyntheticEvent, useState } from 'react';
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import { useController, UseControllerProps } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

import useTranslation from '../../../hooks/useTranslation';

type TProps = {
  maxEmails?: number;
  maxEmailsWarning?: string;
} & UseControllerProps<any>;

const EmailListFieldController = (props: TProps) => {
  const { maxEmails, maxEmailsWarning, ...rest } = props;
  const { t } = useTranslation();
  const { field } = useController(rest);
  const [inputValue, setInputValue] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();

  const reachedMaxEmails = (value: string[]) => value.length === maxEmails;

  const changeFieldValue = (value: string[]) => {
    if (maxEmails && value.length > maxEmails) {
      return;
    }

    if (reachedMaxEmails(value)) {
      enqueueSnackbar(maxEmailsWarning, { variant: 'info' });
    }

    field.onChange(value);
  };

  const handleAutocompleteChange = (
    event: SyntheticEvent,
    value: any,
    reason: AutocompleteChangeReason
  ) => {
    const lastEmail = value[value.length - 1];
    if (reason !== 'createOption' || isEmail(lastEmail)) {
      changeFieldValue(value);
      return;
    }

    setInputValue(lastEmail);
  };

  const handleInputChange = (
    event: SyntheticEvent,
    newInputValue: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    if (reachedMaxEmails(field.value)) {
      return;
    }

    if (reason === 'reset') {
      setInputValue('');
      return;
    }

    if (!newInputValue.endsWith(',')) {
      setInputValue(newInputValue);
      return;
    }

    const email = newInputValue.slice(0, -1);
    if (isEmail(email)) {
      changeFieldValue([...field.value, email]);
      setInputValue('');
    }
  };

  return (
    <Autocomplete
      multiple
      options={[]}
      value={field.value}
      freeSolo
      fullWidth
      clearOnBlur
      onChange={handleAutocompleteChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderTags={(value: string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            variant="filled"
            color="primary"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params: any) => (
        <TextField
          {...params}
          label={t({ defaultMessage: 'Comma separated emails' })}
          placeholder={t({ defaultMessage: 'Guests emails' })}
          variant="outlined"
        />
      )}
    />
  );
};

export default EmailListFieldController;
