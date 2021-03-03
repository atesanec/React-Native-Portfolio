import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'qs';
import { createStructuredSelector } from 'reselect';
import { getIsLoggedIn } from '../../reducers/common/session';
import GuestGuard from '../../components/Common/GuestGuard';

const mapState = createStructuredSelector({
  isLoggedIn: getIsLoggedIn,
});

const mapDispatch = {};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    history,
    location,
    match,
    staticContext,
    ...props
  } = { ...ownProps, ...stateProps, ...dispatchProps };
  const { redirectTo = null } = qs.parse(location.search.substr(1));
  return {
    ...props,
    redirectTo,
  };
};

export default withRouter(connect(mapState, mapDispatch, mergeProps)(GuestGuard));
