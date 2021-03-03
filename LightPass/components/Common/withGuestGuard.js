import React from 'react';
import GuestGuardContainer from '../../containers/Common/GuestGuardContainer';

export default function withGuestGuard(Component) {
  return function WithGuestGuard(props) {
    return (
      <GuestGuardContainer>
        <Component {...props} />
      </GuestGuardContainer>
    );
  };
}
