import * as yup from 'yup';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { countries } from 'countries-list';
import {
  ADDRESS_MAX_LENGTH,
  COMPANY_MAX_LENGTH,
  NAME_MAX_LENGTH,
  PHONE_NUMBER_MAX_LENGTH,
  PHONE_NUMBER_MIN_LENGTH,
  STATE_MAX_LENGTH,
} from '../../constants/validation';
import { T } from 'i18n/translate';

// NAME
export const nameValidation = yup
  .string()
  .min(2, (<T defaultMessage="Too short" />) as any)
  .max(NAME_MAX_LENGTH, 'Too long');

export const nameValidationRequired = nameValidation.required(
  (<T defaultMessage="Please enter name" />) as any
);

// NAME
export const familyNameValidation = yup
  .string()
  .nullable()
  .optional()
  .transform((curr) => curr || undefined)
  .min(2, (<T defaultMessage="Too short" />) as any)
  .max(NAME_MAX_LENGTH, 'Too long');

export const familyNameValidationRequired = nameValidation.required(
  (<T defaultMessage="Please enter family name" />) as any
);

// EMAIL
// NAME
export const emailValidation = yup
  .string()
  .email((<T defaultMessage="Email is invalid" />) as any);

export const emailValidationRequired = emailValidation.required(
  (<T defaultMessage="Please enter email" />) as any
);

// COMANY
export const companyValidation = yup
  .string()
  .nullable()
  .optional()
  .transform((curr) => curr || undefined)
  .min(1, (<T defaultMessage="Too short" />) as any)
  .max(COMPANY_MAX_LENGTH, 'Too long');

export const companyValidationRequired = companyValidation.required(
  (<T defaultMessage="Please enter company name" />) as any
);

// COUNTRY
export const countryValidation = yup
  .string()
  .nullable()
  .test(
    'country',
    (<T defaultMessage="Select country from the list" />) as any,
    (value) =>
      Object.keys(countries).some((countryCode) => countryCode === value)
  );

export const countryValidationRequired = countryValidation.required(
  (<T defaultMessage="Please select country" />) as any
);

// STATE
export const stateValidation = yup.string().max(STATE_MAX_LENGTH);

export const stateValidationRequired = stateValidation.required(
  (<T defaultMessage="Please select state" />) as any
);

// CITY
export const cityValidation = yup.string();

export const cityValidationRequired = cityValidation.required(
  (<T defaultMessage="Please select city" />) as any
);

// ADDRESS
export const addressValidation = yup
  .string()
  .min(2, (<T defaultMessage="Too short" />) as any)
  .max(ADDRESS_MAX_LENGTH, 'Too long');

export const addressValidationRequired = addressValidation.required(
  (<T defaultMessage="Please enter address" />) as any
);

// POSTAL CODE
export const postalCodeValidation = yup.string();

export const postalCodeValidationRequired = postalCodeValidation.required(
  (<T defaultMessage="Please emter postal code" />) as any
);

// PHONE NUMBER
export const phoneNumberValidation = yup
  .string()
  .nullable()
  .optional()
  .transform((curr) => curr || undefined)
  .min(PHONE_NUMBER_MIN_LENGTH, (<T defaultMessage="Too short" />) as any)
  .max(PHONE_NUMBER_MAX_LENGTH, (<T defaultMessage="Too long" />) as any)
  .test({
    test: (value) => {
      if (!value) return true;

      return isMobilePhone(value || '');
    },
    message: (<T defaultMessage="Phone is invalid" />) as any,
  });

export const phoneNumberValidationRequried = phoneNumberValidation.required(
  (<T defaultMessage="Please enter your phone number" />) as any
);
