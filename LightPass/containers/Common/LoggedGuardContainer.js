import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { getIsLoggedIn } from '../../reducers/common/session';
import LoggedGuard from '../../components/Common/LoggedGuard';

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

  return {
    ...props,
    redirectTo: `${location.pathname}${location.search}`,
  };
};

export default withRouter(connect(mapState, mapDispatch, mergeProps)(LoggedGuard));
