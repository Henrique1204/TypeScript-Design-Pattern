import EmailValidatorClassAdapter from './validation/email-validator-class-adapter';
import emailValidatorFnAdapter from './validation/email-validator-fn-adapter';

import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

const validateEmailClass = (
  validator: EmailValidatorProtocol,
  email: string
): void => {
  const { isEmail } = validator;

  if (isEmail(email)) console.log('É válido! (CLASS)');
  else console.log('É inválido! (CLASS)');
};

const validateEmailFn = (
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void => {
  if (emailValidator(email)) console.log('É válido! (FN)');
  else console.log('É inválido! (FN)');
};

validateEmailClass(new EmailValidatorClassAdapter(), 'paulo@gmail.com');
validateEmailFn(emailValidatorFnAdapter, 'paulo@gmail.com');
