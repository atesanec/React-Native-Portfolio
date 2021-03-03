import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getUser } from '../../reducers/user/current';
import { getWorkspace } from '../../reducers/workspace/current';
import CardTitle from '../../components/Common/CardTitle';

const mapState = createStructuredSelector({
  user: getUser,
  workspace: getWorkspace,
});

const mapDispatch = null;

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { user, workspace, ...props } = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
  return {
    title: (workspace && workspace.displayName) || '..',
    subtitle: (user && user.email) || '..',
    ...props,
  };
};

export default connect(
  mapState,
  mapDispatch,
  mergeProps,
)(CardTitle);
