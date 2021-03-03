import displayMessage from './displayMessage';
import parseErrorMessage from './parseErrorMessage';

// eslint-disable-next-line no-unused-vars
export default function showErrorMessage(error, context = {}) {
  parseErrorMessage(error).then(({ message }) => displayMessage(message, 'error'));
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`\n\x1b[31m${error}\x1b[0m\n`);
  }
}
