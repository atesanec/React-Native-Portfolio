import React from 'react';
import { Switch as SwitchBase } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles';

function Switch({
  style,
  disabled,
  value,
  color,
  onValueChange,
}) {
  return (
    <SwitchBase
      disabled={disabled}
      value={value}
      color={color}
      onValueChange={onValueChange}
      style={[styles.switch, style]}
    />
  );
}

Switch.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  color: PropTypes.string,
  onValueChange: PropTypes.func,
};

Switch.defaultProps = {
  style: null,
  onValueChange: () => {},
  color: null,
  value: false,
  disabled: false,
};

export default Switch;
