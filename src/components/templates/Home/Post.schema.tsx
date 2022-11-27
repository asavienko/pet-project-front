import * as yup from 'yup';
import { T } from '../../../i18n/translate';

const schema = yup.object().shape({
  post: yup
    .string()
    .nullable()
    .required()
    .min(1, (<T defaultMessage="Too short" />) as any),
});

export default schema;
