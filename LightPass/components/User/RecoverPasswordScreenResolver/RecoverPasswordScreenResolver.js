import qs from 'qs';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-native';
import RecoverPasswordScreenContainer from '../../../containers/User/RecoverPasswordScreenContainer';

export default function RecoverPasswordScreenResolver({ location }) {
  const {
    email,
    token,
    workspace_domain: workspaceDomain,
    workspace_display_name: workspaceDisplayName,
  } = qs.parse(location?.search?.slice(1));

  if (!(token && email && workspaceDomain && workspaceDisplayName)) {
    return <Redirect to="/" />;
  }

  return (
    <RecoverPasswordScreenContainer
      token={token}
      email={email}
      workspaceDomain={workspaceDomain}
      workspaceDisplayName={workspaceDisplayName}
    />
  );
}

RecoverPasswordScreenResolver.propTypes = {
  location: PropTypes.object.isRequired,
};
