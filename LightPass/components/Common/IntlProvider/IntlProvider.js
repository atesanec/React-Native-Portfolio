import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as IntlProviderBase } from 'react-intl';
import translations from '../../../common/translations';
import IntlTextComponent from '../IntlTextComponent';

// `key` is needed to force re-rendering
export default function IntlProvider({ locale, ...props }) {
  return (
    <IntlProviderBase
      key={locale}
      locale={locale}
      messages={translations[locale]}
      textComponent={IntlTextComponent}
      {...props}
    />
  );
}

IntlProvider.propTypes = {
  locale: PropTypes.string.isRequired,
};
