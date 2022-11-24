import * as yup from 'yup';
import {
  cityValidation,
  companyValidation,
  familyNameValidation,
  countryValidationRequired,
  nameValidationRequired,
  stateValidation,
} from 'utils/validation/validationSchema';

const schema = yup.object().shape({
  company: companyValidation,
  givenName: nameValidationRequired,
  familyName: familyNameValidation,
  country: countryValidationRequired,
  state: stateValidation,
  city: cityValidation,
});

export default schema;
