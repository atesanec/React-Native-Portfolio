import React from 'react';
import PropTypes from 'prop-types';
import { FAB } from 'react-native-paper';

function Fab({
  icon,
  label,
  accessibilityLabel,
  small,
  color,
  disabled,
  visible,
  loading,
  onPress,
  style,
}) {
  return (
    <FAB
      icon={icon}
      label={label}
      accessibilityLabel={accessibilityLabel}
      small={small}
      color={color}
      disabled={disabled}
      visible={visible}
      loading={loading}
      onPress={onPress}
      style={style}
    />
  );
}

Fab.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  small: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

Fab.defaultProps = {
  icon: null,
  label: null,
  accessibilityLabel: null,
  small: null,
  color: null,
  disabled: null,
  visible: true,
  loading: null,
  onPress: null,
  style: null,
};

export default Fab;
