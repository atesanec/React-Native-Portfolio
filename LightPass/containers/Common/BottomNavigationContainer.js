import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { createStructuredSelector } from 'reselect';

import BottomNavigation from '../../components/Common/BottomNavigation';
import { getUser } from '../../reducers/user/current';
import { getWorkspace } from '../../reducers/workspace/current';

const mapState = createStructuredSelector({
  user: getUser,
  workspace: getWorkspace,
});

const mapDispatch = {};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    history,
    location,
    match,
    staticContext,
    ...props
  } = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };

  return {
    ...props,
    onTabChange: (tab) => history.push(tab.pathname),
    tab: { pathname: location.pathname },
  };
};

export default withRouter(
  connect(mapState, mapDispatch, mergeProps)(BottomNavigation),
);
