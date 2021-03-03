import React from 'react';
import { Icon as IconBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function Icon({
  source,
  color,
  size,
  ...rest
}) {
  return (
    <IconBase
      source={source}
      color={color}
      size={size}
      {...rest}
    />
  );
}

Icon.propTypes = {
  source: PropTypes.any.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: undefined,
  size: undefined,
};

export default Icon;
