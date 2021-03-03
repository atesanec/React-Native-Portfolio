import React from 'react';
import LoggedGuardContainer from '../../containers/Common/LoggedGuardContainer';

export default function withLoggedGuard(Component) {
  return function WithLoggedGuard(props) {
    return (
      <LoggedGuardContainer>
        <Component {...props} />
      </LoggedGuardContainer>
    );
  };
}
