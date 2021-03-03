import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import SvgIcShowBlack from '@dac/light-ui-assets/lib/icons/IcShowBlack';
import SvgIcHideBlack from '@dac/light-ui-assets/lib/icons/IcHideBlack';
import TextInput from '../TextInput';

import styles from './styles';

import getFieldError from '../../../common/getFieldError';
import ErrorText from '../ErrorText';
import IconButton from '../IconButton';
import { colors, icons } from '../../../common/theme';

export default class PasswordInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // redux-form doesn't immediately update the value, so we have to use internal state
      // to update it faster, otherwise the child component reverts the value
      value: props.input.value,
      secureTextEntry: true,
    };
  }

  static getDerivedStateFromProps({ input: { value } }, prevState) {
    const { value: oldValue } = prevState;

    if (value !== oldValue) {
      return { value };
    }
    return null;
  }

  // eslint-disable-next-line react/destructuring-assignment
  handleChangeText = (value) => this.setState({ value }, () => this.props.input.onChange(value));

  handleSetSecure = (val) => () => this.setState({ secureTextEntry: val });

  render() {
    const {
      input: { onBlur },
      meta,
      ...restProps
    } = this.props;
    const { secureTextEntry, value } = this.state;
    const error = getFieldError(this.props);

    return (
      <View>
        <View style={styles.inputPassword}>
          <View style={styles.input}>
            <TextInput
              error={!!error}
              value={value}
              secureTextEntry={secureTextEntry}
              onChangeText={this.handleChangeText}
              onBlur={() => onBlur(value)}
              {...restProps}
            />
          </View>
          <IconButton
            color={colors.black}
            size={icons.size.small}
            icon={(iconProps) => (secureTextEntry ? (
              <SvgIcHideBlack {...iconProps} />
            ) : (
              <SvgIcShowBlack {...iconProps} />
            ))}
            style={styles.button}
            onPress={this.handleSetSecure(!secureTextEntry)}
          />
        </View>
        {error && <ErrorText errorMessage={error} />}
      </View>
    );
  }
}

PasswordInputField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.object.isRequired,
};
