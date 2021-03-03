import React from 'react';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';

export default function AppReadinessGuard({ isReady, children }) {
  if (!isReady) {
    return <AppLoading />;
  }

  return children;
}

AppReadinessGuard.propTypes = {
  isReady: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
