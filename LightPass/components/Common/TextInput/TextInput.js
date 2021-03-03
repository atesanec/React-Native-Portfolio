import React from 'react';
import { TextInput as TextInputBase } from 'react-native-paper';
import PropTypes, { object, array } from 'prop-types';

function TextInput({
  onChangeText,
  onBlur,
  label,
  value,
  placeholder,
  style,
  secureTextEntry,
  error,
  autoCapitalize,
  keyboardType,
  disabled,
  labelUppercase,
  ...rest
}) {
  return (
    <TextInputBase
      {...rest}
      secureTextEntry={secureTextEntry}
      error={error}
      labelUppercase={labelUppercase}
      placeholder={placeholder || null}
      style={style}
      label={label}
      value={value}
      disabled={disabled}
      onChangeText={onChangeText}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
    />
  );
}

TextInput.propTypes = {
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([object, array]),
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  labelUppercase: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  labelUppercase: undefined,
  error: false,
  onBlur: null,
  secureTextEntry: false,
  placeholder: '',
  style: [],
  autoCapitalize: undefined,
  keyboardType: undefined,
  onChangeText: () => null,
  disabled: false,
};


export default TextInput;
