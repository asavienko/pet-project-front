import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';

import { Controller } from 'react-hook-form';

import { StyledTextField } from './styles';
import InfoTooltip from 'components/InfoTooltip';

type TProps = {
  control?: any; // optional when using form provider
  name: string;
  tooltip?: React.ReactNode;
  CustomTextField?: React.ComponentType<any>;
} & TextFieldProps;

const TextFieldController: React.VFC<TProps> = ({
  control,
  name,
  tooltip,
  label,
  CustomTextField,
  ...props
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => {
      let fieldLabel = label;

      if (tooltip) {
        fieldLabel = (
          <>
            {label}
            <InfoTooltip>{tooltip}</InfoTooltip>
          </>
        );
      }

      return CustomTextField ? (
        <CustomTextField
          fullWidth
          label={fieldLabel}
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      ) : (
        <StyledTextField
          variant="outlined"
          fullWidth
          label={fieldLabel}
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      );
    }}
  />
);

export default TextFieldController;
