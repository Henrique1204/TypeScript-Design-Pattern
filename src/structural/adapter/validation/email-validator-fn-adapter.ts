import { EmailValidatorFnProtocol } from './email-validator-protocol';

import isEmailValidator from 'validator/lib/isEmail';

const emailValidatorFnAdapter: EmailValidatorFnProtocol = (value) => {
  return isEmailValidator(value);
};

export default emailValidatorFnAdapter;
