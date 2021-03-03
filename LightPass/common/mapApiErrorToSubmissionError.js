import { SubmissionError } from 'redux-form';
import parseErrorMessage from './parseErrorMessage';
import displayMessage from './displayMessage';
import createErrorMessage from './createErrorMessage';
import commonMessages from './commonMessages';

export default function mapApiErrorToSubmissionError(apiError) {
  parseErrorMessage(apiError)
    .then(({ message }) => displayMessage(message, 'error'))
    .catch(() => displayMessage(commonMessages.undefinedError, 'error'));
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`\n\x1b[31m${apiError}\x1b[0m\n`);
  }
  return new SubmissionError({
    _error: createErrorMessage(commonMessages.undefinedError),
  });
}
