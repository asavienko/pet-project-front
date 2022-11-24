import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  Switch,
  SwitchProps,
} from '@mui/material';

type TProps = {
  control?: Control;
  name: string;
  label?: string | number | React.ReactElement;
};

const SwitchFieldController: React.VFC<TProps & SwitchProps> = ({
  control,
  name,
  label,
  ...props
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) =>
      label ? (
        <FormControl>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} {...props} />}
            label={label}
          />
        </FormControl>
      ) : (
        <Switch {...field} {...props} />
      )
    }
  />
);

export default SwitchFieldController;
