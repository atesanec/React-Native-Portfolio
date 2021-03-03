import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native-paper';

function Spinner({
  visible,
  color,
  size,
  hidesWhenStopped,
  style,
}) {
  return (
    <ActivityIndicator
      size={size}
      color={color}
      style={style}
      animating={visible}
      hidesWhenStopped={hidesWhenStopped}
    />
  );
}

Spinner.propTypes = {
  visible: PropTypes.bool,
  hidesWhenStopped: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.any,
};

Spinner.defaultProps = {
  visible: null,
  color: null,
  size: undefined,
  hidesWhenStopped: null,
  style: null,
};

export default Spinner;
