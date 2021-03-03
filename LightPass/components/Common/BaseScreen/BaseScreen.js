import React from 'react';
import PropTypes from 'prop-types';
import ScreenErrorBoundary from '../ScreenErrorBoundary';

export default function BaseScreen({ children }) {
  return (
    <ScreenErrorBoundary>
      {children}
    </ScreenErrorBoundary>
  );
}

BaseScreen.propTypes = {
  children: PropTypes.node,
};

BaseScreen.defaultProps = {
  children: null,
};
