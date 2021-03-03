import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import StatusBarHeightContext from './StatusBarHeightContext';

export default class StatusBarHeightProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }


  async componentDidMount() {
    const DEFAULT_STATUSBAR_HEIGHT_EXPO = Constants.statusBarHeight;

    let height = DEFAULT_STATUSBAR_HEIGHT_EXPO;
    if (Platform.OS === 'ios') {
      height = Platform.Version < 11 ? DEFAULT_STATUSBAR_HEIGHT_EXPO : 0;
    }

    this.setState({ height });
  }

  render() {
    const { children } = this.props;
    const { height } = this.state;

    return (
      <StatusBarHeightContext.Provider value={{ height }}>
        {children}
      </StatusBarHeightContext.Provider>
    );
  }
}

StatusBarHeightProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
