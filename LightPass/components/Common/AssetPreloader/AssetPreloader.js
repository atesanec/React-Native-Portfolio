import React from 'react';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import { loadFontFamily } from '../../../common/themeHelpers';
import showErrorMessage from '../../../common/showErrorMessage';

export default class AssetPreloader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
  }

  render() {
    const { children } = this.props;
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <AppLoading
          startAsync={loadFontFamily}
          onFinish={() => this.setState({ isReady: true })}
          onError={showErrorMessage}
        />
      );
    }

    return children;
  }
}

AssetPreloader.propTypes = {
  children: PropTypes.element.isRequired,
};
