import createErrorMessage from './createErrorMessage';
import commonMessages from './commonMessages';

export default function mapApiErrorToErrorMessage(apiError) {
  if (process.env.NODE_ENV === 'development') {
    if (apiError.response && apiError.response.text) {
      // eslint-disable-next-line no-console
      apiError.response.text().then(console.error);
    }
    // eslint-disable-next-line no-console
    console.log(`\n\x1b[31m${apiError}\x1b[0m\n`);
  }

  return createErrorMessage(commonMessages.undefinedError);
}
