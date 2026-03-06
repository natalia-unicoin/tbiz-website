import * as yup from 'yup';

import { EmailRegex } from 'utils';

const subscribeScheme = yup.object({
  email: yup
    .string()
    .matches(EmailRegex, 'field__email_valid')
    .required('field__email_required'),
});

export default subscribeScheme;
