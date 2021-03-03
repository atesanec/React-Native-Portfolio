import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton as RadioButtonBase } from 'react-native-paper';

function RadioButton({
  value,
  // checked,
  disabled,
  onPress,
  uncheckedColor,
  color,
}) {
  return (
    <RadioButtonBase
      value={value}
      // status={checked ? 'checked' : 'unchecked'}
      disabled={disabled}
      onPress={onPress}
      uncheckedColor={uncheckedColor}
      color={color}
    />
  );
}

RadioButton.propTypes = {
  value: PropTypes.string,
  // checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  uncheckedColor: PropTypes.string,
  color: PropTypes.string,
};

RadioButton.defaultProps = {
  value: null,
  // checked: null,
  disabled: null,
  onPress: null,
  uncheckedColor: null,
  color: null,
};

export default RadioButton.bind(RadioButtonBase);
