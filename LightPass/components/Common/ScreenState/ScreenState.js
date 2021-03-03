import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpinnerOverlay from '../SpinnerOverlay';
import ErrorText from '../ErrorText';
import mapApiErrorToErrorMessage from '../../../common/mapApiErrorToErrorMessage';

// If we use consecutive requests,
// that AWAIT_TIMEOUT is a time after the first request to the next request that will be sent
const AWAIT_TIMEOUT = 500;

export default class ScreenState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      awaitTimeout: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { state, withConsecutiveRequests } = this.props;
    const { awaitTimeout } = this.state;

    if (withConsecutiveRequests) {
      if (prevProps.state !== 'loading' && state === 'loading' && !awaitTimeout) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          awaitTimeout: setTimeout(
            () => {
              if (awaitTimeout) clearTimeout(awaitTimeout);
              this.setState({ awaitTimeout: null });
            },
            AWAIT_TIMEOUT,
          ),
        });
      }
    }
  }

  render() {
    const {
      data,
      state,
      error,
      children,
      visible,
      withConsecutiveRequests,
    } = this.props;
    const { awaitTimeout } = this.state;

    const isAwaitedTimeoutEnabled = withConsecutiveRequests && !!awaitTimeout;
    const isLoaded = (data && state === 'loaded') || state === null;
    const isLoading = state === 'loading' || state === 'loading';
    const isError = (!data && state === 'loaded') || state === 'error';

    return (
      <>
        {visible || isLoaded ? children : null}
        <SpinnerOverlay visible={isAwaitedTimeoutEnabled || isLoading} />
        {isError && error
          ? error && (
          <ErrorText errorMessage={mapApiErrorToErrorMessage(error)} />
          )
          : null}
      </>
    );
  }
}

ScreenState.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.any,
  state: PropTypes.string,
  error: PropTypes.any,
  visible: PropTypes.bool,
  withConsecutiveRequests: PropTypes.bool,
};

ScreenState.defaultProps = {
  data: null,
  state: null,
  error: null,
  visible: null,
  withConsecutiveRequests: false,
};
