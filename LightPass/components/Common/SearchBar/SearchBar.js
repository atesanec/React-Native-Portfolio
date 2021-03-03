import React, { Component } from 'react';
import PropTypes, { object, array } from 'prop-types';

import { Searchbar } from 'react-native-paper';
import { StatusBarHeightConsumer } from '../StatusBarHeight';
import styles from './styles';
import { colors } from '../../../common/theme';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }

  render() {
    const {
      onChangeText,
      value,
      placeholder,
      style,
      icon,
      onIconPress,
      inputStyle,
      iconColor,
      clearIcon,
      autoCapitalize,
      keyboardType,
    } = this.props;
    const {
      isFocus,
    } = this.state;

    return (
      <StatusBarHeightConsumer>
        {({ height }) => {
          const marginTop = height;

          return (
            <Searchbar
              onIconPress={onIconPress}
              inputStyle={inputStyle}
              iconColor={iconColor}
              clearIcon={clearIcon}
              placeholder={placeholder}
              icon={icon}
              style={[
                { marginTop, borderColor: isFocus ? colors.cornflowerBlue : colors.lightGray },
                styles.searchBar,
                style,
              ]}
              value={value}
              onChangeText={onChangeText}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              onFocus={() => this.setState({ isFocus: true })}
              onBlur={() => this.setState({ isFocus: false })}
            />
          );
        }}
      </StatusBarHeightConsumer>
    );
  }
}

SearchBar.propTypes = {
  icon: PropTypes.any,
  clearIcon: PropTypes.string,
  iconColor: PropTypes.string,
  placeholder: PropTypes.string,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  onIconPress: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
  inputStyle: PropTypes.oneOfType([object, array]),
  style: PropTypes.oneOfType([object, array]),
};

SearchBar.defaultProps = {
  icon: null,
  onIconPress: null,
  inputStyle: null,
  clearIcon: null,
  iconColor: null,
  placeholder: null,
  style: null,
  autoCapitalize: undefined,
  keyboardType: undefined,
  onChangeText: null,
};
