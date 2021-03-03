import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { Redirect } from 'react-router-native';

export default function LoggedGuard({
  isLoggedIn,
  children,
  redirectTo,
}) {
  if (!isLoggedIn) {
    return <Redirect to={`/login/workspace?${qs.stringify({ redirectTo })}`} />;
  }
  return children;
}

LoggedGuard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

LoggedGuard.defaultProps = {
  redirectTo: null,
};
