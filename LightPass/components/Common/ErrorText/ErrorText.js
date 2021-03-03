import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import HelperText from '../HelperText';

export default function ErrorText({ errorMessage, ...props }) {
  const { message, values } = errorMessage;

  return (
    <HelperText type="error" visible {...props}>
      <FormattedMessage {...message} values={values} />
    </HelperText>
  );
}

ErrorText.propTypes = {
  errorMessage: PropTypes.object.isRequired,
};
