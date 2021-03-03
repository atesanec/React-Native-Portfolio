import enTranslationMessages from '../translations/en.json';
import deTranslationMessages from '../translations/de.json';
import config from '../config';

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== config.common.defaultLocale
    ? formatTranslationMessages(config.common.defaultLocale, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== config.common.defaultLocale
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export default {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
};
