import React from 'react';
import PropTypes from 'prop-types';
import reportError from '../../../common/reportError';

export default class ScreenErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    reportError(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // TODO: error screen
      return null;
    }
    return children;
  }
}

ScreenErrorBoundary.propTypes = {
  children: PropTypes.node,
};

ScreenErrorBoundary.defaultProps = {
  children: null,
};
