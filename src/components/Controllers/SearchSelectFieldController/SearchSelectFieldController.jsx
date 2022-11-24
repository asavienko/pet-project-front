import React from 'react';
import { Controller } from 'react-hook-form';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { StyledTextField } from '../TextFieldController/styles';
import CustomPopper from './CustomPopper';
import { StyledSelect } from './styles';

const SearchSelectFieldController = ({
  control,
  name,
  options,
  onChange,
  ...props
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <StyledSelect
        options={options}
        PopperComponent={CustomPopper}
        {...props}
        {...field}
        popupIcon={<RiArrowDropDownLine />}
        onChange={(e, newValue) => {
          field.onChange(newValue);
          onChange?.(e, newValue);
        }}
        renderInput={(params) => (
          <StyledTextField
            variant="outlined"
            fullWidth
            name={name}
            {...params}
            label={props.label}
            error={!!error}
            helperText={error?.message}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'none',
            }}
          />
        )}
      />
    )}
  />
);

export default SearchSelectFieldController;
