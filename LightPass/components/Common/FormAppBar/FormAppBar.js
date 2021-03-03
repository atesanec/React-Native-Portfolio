import React from 'react';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

import { FormattedMessage } from 'react-intl';
import AppBar from '../AppBar';
import AppBarAction from '../AppBarAction';
import messages from './messages';

function FormAppBar({
  children,
  onGoBack,
  onDone,
  invalid,
  pristine,
}) {
  const disabled = pristine || (invalid && !pristine);

  return (
    <AppBar
      Left={<Appbar.BackAction onPress={onGoBack} />}
      Right={(
        <AppBarAction
          disabled={disabled}
          text={<FormattedMessage {...messages.done} />}
          onPress={onDone}
        />
      )}
    >

      {children}
    </AppBar>
  );
}

FormAppBar.propTypes = {
  children: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default FormAppBar;
