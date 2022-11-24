import * as yup from 'yup';
import {
  companyValidation,
  nameValidationRequired,
  familyNameValidation,
  countryValidationRequired,
} from '../../../../utils/validation/validationSchema';

const schema = yup.object().shape({
  company: companyValidation,
  givenName: nameValidationRequired,
  familyName: familyNameValidation,
  country: countryValidationRequired,
});

export default schema;
