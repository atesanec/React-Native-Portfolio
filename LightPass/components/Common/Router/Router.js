import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { ConnectedRouter } from 'connected-react-router';

// NativeRouter doesn't allow to override history
export default function Router(props) {
  return <ConnectedRouter {...props} />;
}

Router.propTypes = {
  getUserConfirmation: PropTypes.func,
};
ç
Router.defaultProps = {
  getUserConfirmation: (message, callback) => {
    Alert.alert('Confirm', message, [
      { text: 'Cancel', onPress: () => callback(false) },
      { text: 'OK', onPress: () => callback(true) },
    ]);
  },
};
