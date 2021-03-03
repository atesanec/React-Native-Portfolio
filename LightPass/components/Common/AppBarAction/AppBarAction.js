import React from 'react';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';

function AppBarAction({
  color,
  icon,
  text,
  size,
  disabled,
  accessibilityLabel,
  onPress,
  style,
}) {
  return (
    <Appbar.Action
      text={text}
      color={color}
      icon={icon}
      size={size}
      disabled={disabled}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={style}
    />
  );
}

AppBarAction.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};


AppBarAction.defaultProps = {
  text: null,
  icon: null,
  color: null,
  size: null,
  disabled: null,
  accessibilityLabel: null,
  onPress: null,
  style: null,
};

export default AppBarAction.bind(Appbar);
