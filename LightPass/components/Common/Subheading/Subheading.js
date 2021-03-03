import React from 'react';
import { Subheading as SubheadingBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function Subheading({ children, style }) {
  return (
    <SubheadingBase style={style}>
      {children}
    </SubheadingBase>
  );
}

Subheading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Subheading.defaultProps = {
  style: null,
};

export default Subheading;
