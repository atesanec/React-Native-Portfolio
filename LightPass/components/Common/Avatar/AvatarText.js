import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as AvatarBase } from 'react-native-paper';

function AvatarText({
  label,
  size,
  color,
  style,
  uppercase,
  labelStyle,
}) {
  return (
    <AvatarBase.Text
      label={uppercase ? label?.toUpperCase() : label}
      size={size}
      color={color}
      style={style}
      labelStyle={labelStyle}
    />
  );
}

AvatarText.propTypes = {
  label: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any,
  labelStyle: PropTypes.any,
};

AvatarText.defaultProps = {
  uppercase: false,
  size: undefined,
  color: undefined,
  style: undefined,
  labelStyle: undefined,
};

export default AvatarText;
