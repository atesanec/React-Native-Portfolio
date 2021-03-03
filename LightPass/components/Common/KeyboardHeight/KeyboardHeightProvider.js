import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import KeyboardHeightContext from './KeyboardHeightContext';

class KeyboardHeightProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide.bind(this),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = (e) => this.setState({ height: e.endCoordinates.height });

  keyboardDidHide = () => this.setState({ height: 0 });

  render() {
    const { children } = this.props;
    const { height } = this.state;

    return (
      <KeyboardHeightContext.Provider value={{ height }}>
        {children}
      </KeyboardHeightContext.Provider>
    );
  }
}

KeyboardHeightProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default KeyboardHeightProvider;
