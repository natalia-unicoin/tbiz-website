import * as yup from 'yup';

import { EmailRegex } from 'utils';

const sendMessageScheme = yup.object({
  fullName: yup
    .string()
    .test('fullName_1', 'field__full_name_required', (value) => {
      return Boolean(value && value.trim());
    }),
  email: yup
    .string()
    .matches(EmailRegex, 'field__email_valid')
    .required('field__email_required'),
  message: yup
    .string()
    .test('message_1', 'field__type_message_required', (value) => {
      return Boolean(value && value.trim());
    }),
});

export default sendMessageScheme;
