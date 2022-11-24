import React from 'react';
import { FormControl, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInputController.module.scss';
import { detectBrowserCountry } from 'utils';

type TProps = {
  control: any;
  name: string;
  label?: React.ReactNode;
  sx?: any;
};

const PhoneInputController = ({ control, name, label, sx }: TProps) => {
  const defaultCountry = detectBrowserCountry()?.toLowerCase() || 'us';

  return (
    <Controller
      control={control}
      name={name}
      // render={({ field, fieldState: { error } }) => (
      render={({ field }) => (
        <FormControl sx={sx} fullWidth>
          <InputLabel>{label}</InputLabel>
          <PhoneInput
            country={defaultCountry}
            value={field.value}
            containerClass={styles.container}
            inputClass={styles.input}
            buttonClass={styles.button}
            dropdownClass={styles.dropdown}
            onChange={(phone) => {
              field.onChange(phone);
            }}
            inputProps={{
              name,
            }}
          />
        </FormControl>
      )}
    />
  );
};

export default PhoneInputController;
