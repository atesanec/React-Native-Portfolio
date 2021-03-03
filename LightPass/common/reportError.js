import * as Sentry from 'sentry-expo';
import config from '../config';

export default function reportError(error, context = {}) {
  if (config.sentry.dsn) {
    Sentry.withScope((scope) => {
      scope.setExtras(context);
      Sentry.captureException(error);
    });
  }
  // TODO: implement error reporting
  // eslint-disable-next-line no-console
  console.log(error, context);
}
