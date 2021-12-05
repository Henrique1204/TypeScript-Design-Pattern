import { EmailValidatorProtocol } from './email-validator-protocol';

import isEmailValidator from 'validator/lib/isEmail';

class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  public isEmail(value: string): boolean {
    return isEmailValidator(value);
  }
}

export default EmailValidatorClassAdapter;
