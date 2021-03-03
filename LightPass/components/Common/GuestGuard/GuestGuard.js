import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-native';

export default function GuestGuard({ isLoggedIn, children, redirectTo }) {
  if (isLoggedIn) {
    return <Redirect to={redirectTo || '/passes/open-door'} />;
  }
  return children;
}

GuestGuard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

GuestGuard.defaultProps = {
  redirectTo: null,
};
