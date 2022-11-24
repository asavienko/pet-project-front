import React, { ReactElement } from 'react';
import {
  createFilterOptions,
  FormHelperText,
  InputLabel,
  TextField,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { Autocomplete } from '@mui/lab';
import { AutocompleteProps } from '@mui/material/Autocomplete/Autocomplete';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from './styles.module.scss';

type TProps = {
  control: Control<any>;
  name: string;
  label?: ReactElement<any, any> | string;
  options: { label: string | number; id: string | number }[];
};

const filter = createFilterOptions();

const DynamicSelectController: React.VFC<
  TProps & Omit<AutocompleteProps<any, any, any, any>, 'renderInput'>
> = ({ control, name, label, options, ...props }) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <>
        {!!label && <InputLabel>{label}</InputLabel>}
        <Autocomplete
          {...props}
          {...field}
          options={options}
          onChange={(event, newValue) => {
            field.onChange(newValue);
          }}
          className={styles.select}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterSelectedOptions
          popupIcon={<RiArrowDropDownLine />}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              variant="outlined"
              className={styles.select}
            />
          )}
          filterOptions={(filterOptions, params) => {
            const filtered = filter(filterOptions, params);
            // Suggest the creation of a new value
            if (params.inputValue !== '') {
              filtered.push({
                id: params.inputValue,
                label: params.inputValue,
              });
            }
            return filtered;
          }}
        />
        <FormHelperText error>{error?.message}</FormHelperText>
      </>
    )}
  />
);

export default DynamicSelectController;
