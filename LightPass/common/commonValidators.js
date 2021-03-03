import zxcvbn from 'zxcvbn';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import messages from './commonMessages';
import createErrorMessage from './createErrorMessage';

export const isRequired = (val) => {
  if (Array.isArray(val)) {
    return val.length
      ? undefined
      : createErrorMessage(messages.isRequiredError);
  }
  return val ? undefined : createErrorMessage(messages.isRequiredError);
};

export const email = (val) => {
  if (!val) {
    return undefined;
  }
  // eslint-disable-next-line no-useless-escape
  const regEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return !regEmail.test(val) && createErrorMessage(messages.emailError);
};

export const password = (val) => {
  const { score, feedback } = zxcvbn(val);

  return !(score === 0 || !feedback)
    ? undefined
    : createErrorMessage(messages.passwordError);
};

export const isValidPhoneNumber = (val) => val && parsePhoneNumberFromString(val).isValid();
