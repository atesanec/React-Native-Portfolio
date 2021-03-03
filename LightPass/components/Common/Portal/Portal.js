import React from 'react';
import { Portal as PortalBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function Portal({ children }) {
  return (
    <PortalBase>
      {children}
    </PortalBase>
  );
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

Portal.defaultProps = {};

export default Portal;
