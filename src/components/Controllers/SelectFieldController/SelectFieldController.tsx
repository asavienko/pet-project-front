/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactElement } from 'react';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from 'react-hook-form';
import {
  Checkbox,
  FormHelperText,
  IconButton,
  InputLabel,
  SelectProps,
} from '@mui/material';
import { RiDeleteBin2Line, RiPencilLine } from 'react-icons/ri';
import { Actions, StyledMenuItem, StyledSelect } from './styles';
import InfoTooltip from 'components/InfoTooltip';

type TAction = {
  type: 'edit' | 'delete';
  onClick: (value: any) => void;
};

export type TOption = {
  // name: string | number;
  name: string | number | React.ReactNode;
  value?: string | number;
  label?: string | number | React.ReactNode;
  disabled?: boolean;
  actions?: TAction[];
  placeholder?: boolean;
  selectable?: boolean;
  onClick?: () => void;
};

type TProps = {
  control?: Control<any>; // optional when using form provider
  name: string;
  label?: ReactElement<any, any> | string;
  tooltip?: React.ReactNode;
  options: TOption[];
  onChange?: (value: string, e: any) => boolean | void; // return false to prevent value from being stored in a form (for example you want to show dialog when you click on the option but you don't want this option to be seelcted)
};

type TControlProps = TProps & Omit<SelectProps, 'onChange'>;

const SelectFieldController: React.VFC<TControlProps> = ({
  control,
  name,
  ...rest
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState, formState }) => (
      <Select
        name={name}
        field={field}
        fieldState={fieldState}
        formState={formState}
        {...rest}
      />
    )}
  />
);

type TSelectProps = Omit<TControlProps, 'control'> & {
  field: ControllerRenderProps<any, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<any>;
};

export const Select = ({
  label,
  tooltip,
  options,
  onChange,
  field,
  fieldState: { error, isTouched },
  formState: { isSubmitted },
  ...props
}: TSelectProps) => (
  <>
    {!!label && (
      <InputLabel>
        {label}
        {tooltip && <InfoTooltip>{tooltip}</InfoTooltip>}
      </InputLabel>
    )}
    <StyledSelect
      {...props}
      {...field}
      renderValue={(value) => {
        if (Array.isArray(value)) {
          const values = options
            .filter((option) => value.includes(option.value))
            .map((value) => value.label || value.name);

          return values.map((value, idx) => (
            <>
              {value}
              {idx !== values.length - 1 ? ', ' : ''}
            </>
          ));
        }

        const selectedOption = options.find((option) => option.value === value);
        return selectedOption
          ? selectedOption.label || selectedOption.name
          : '';
      }}
      onChange={(e) => {
        if (onChange) {
          const result = onChange(e.target.value as string, e);

          if (result === false) {
            return;
          }
        }

        field.onChange(e.target.value);
      }}
    >
      {options?.map(
        (
          {
            name: optionName,
            onClick,
            disabled,
            value,
            selectable = true,
            actions,
          },
          idx
        ) => {
          const selected = props.multiple
            ? Array.isArray(field.value) && field.value.includes(value)
            : field.value && field.value === value;
          return (
            <StyledMenuItem
              value={value}
              onClick={onClick}
              disabled={disabled}
              key={idx}
              sx={{
                whiteSpace: 'initial',
              }}
            >
              {props.multiple && selectable && (
                <Checkbox checked={selected}></Checkbox>
              )}
              {optionName}

              {actions && (
                <Actions>
                  {actions.map((action, idx) => {
                    if (action.type === 'edit') {
                      return (
                        <IconButton
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(value);
                          }}
                          color="primary"
                        >
                          <RiPencilLine />
                        </IconButton>
                      );
                    }

                    if (action.type === 'delete') {
                      return (
                        <IconButton
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(value);
                          }}
                          color="warning"
                        >
                          <RiDeleteBin2Line />
                        </IconButton>
                      );
                    }

                    return null;
                  })}
                </Actions>
              )}
            </StyledMenuItem>
          );
        }
      )}
    </StyledSelect>
    {(isTouched || isSubmitted) && (
      <FormHelperText error>{error?.message}</FormHelperText>
    )}
  </>
);

export default SelectFieldController;
