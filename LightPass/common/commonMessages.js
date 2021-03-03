import { defineMessages } from 'react-intl';

export default defineMessages({
  isRequiredError: {
    id: 'global.common.isRequiredError',
    defaultMessage: 'This field is required.',
  },
  emailError: {
    id: 'global.common.emailError',
    defaultMessage: 'The email is invalid.',
  },
  passwordError: {
    id: 'global.common.passwordError',
    defaultMessage: 'The password is invalid.',
  },
  undefinedError: {
    id: 'global.common.undefinedError',
    defaultMessage: 'Undefined error.',
  },
  activateAccountSnackBar: {
    id: 'global.common.activateAccountSnackBar',
    defaultMessage:
      'Welcome {username}. Your account has been created for the {email}.',
  },
  recoverPasswordSnackBar: {
    id: 'global.common.recoverPasswordSnackBar',
    defaultMessage: 'Your password successfully recovered',
  },
});
