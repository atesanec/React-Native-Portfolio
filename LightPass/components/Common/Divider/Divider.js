import React from 'react';
import PropTypes from 'prop-types';
import { Divider as DividerBase, withTheme } from 'react-native-paper';

function Divider({ theme, color, style }) {
  const { colors } = theme;

  return (
    <DividerBase
      style={[{ backgroundColor: color || colors.whiteTwo }, style]}
    />
  );
}

Divider.propTypes = {
  theme: PropTypes.object.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

Divider.defaultProps = {
  style: null,
  color: undefined,
};

export default withTheme(Divider);
