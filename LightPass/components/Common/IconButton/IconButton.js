import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as IconButtonBase } from 'react-native-paper';

function IconButton({
  icon,
  color,
  size,
  isMain,
  disabled,
  animated,
  onPress,
  style,
}) {
  return (
    <IconButtonBase
      icon={icon}
      color={color}
      size={size}
      isMain={isMain}
      disabled={disabled}
      animated={animated}
      onPress={onPress}
      style={style}
    />
  );
}


IconButton.propTypes = {
  icon: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.number,
  isMain: PropTypes.bool,
  disabled: PropTypes.string,
  animated: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

IconButton.defaultProps = {
  icon: null,
  color: null,
  size: null,
  isMain: null,
  disabled: null,
  animated: null,
  onPress: null,
  style: null,
};

export default IconButton;
