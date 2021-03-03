import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { push } from 'connected-react-router';
import getWorkspaceAction from '../../actions/workspace/getWorkspace';
import getUserAction from '../../actions/user/getUser';
import { openDialog, showSnackBar } from '../../actionsGlobal/common';

import CreateUserScreen from '../../components/User/CreateUserScreen';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import userMessages from '../../user/userMessages';

import {
  getUser,
  getState as getUserState,
  getError as getUserError,
} from '../../reducers/user/current';
import {
  getWorkspace,
  getState as getWorkspaceState,
  getError as getWorkspaceError,
} from '../../reducers/workspace/current';

import showErrorMessage from '../../common/showErrorMessage';
import { dialogNames } from '../../common/commonConstants';
import createUser from '../../actions/user/createUser';
import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
import reportError from '../../common/reportError';

const mapStateGlobal = null;

const madDispatchGlobal = (dispatch, { workspace }) => ({
  onInviteInfoAlertOpen: () => {
    dispatch(openDialog(dialogNames.inviteInfoAlert));
  },
  onSubmitSuccess: ({ userDisplayName }) => {
    dispatch(push('/users'));
    if (workspace?.displayName) {
      dispatch(
        showSnackBar({
          message: userMessages.userCreateSuccess,
          values: {
            userDisplayName,
            workspaceDisplayName: workspace?.displayName,
          },
        }),
      );
    }
  },
});

const CreateUserScreenContainer = connect(
  mapStateGlobal,
  madDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(CreateUserScreen);

const mapState = createStructuredSelector({
  user: getUser,
  userState: getUserState,
  userError: getUserError,
  workspace: getWorkspace,
  workspaceError: getWorkspaceError,
  workspaceState: getWorkspaceState,
});

const mapDispatch = (dispatch) => ({
  onSubmit: async ({ displayName, email }) => {
    try {
      await dispatch(createUser({ displayName, email }));
      return { userDisplayName: displayName };
    } catch (error) {
      throw mapApiErrorToSubmissionError(error);
    }
  },
  onComponentDidMount: async () => {
    try {
      await Promise.all([
        dispatch(getUserAction()),
        dispatch(getWorkspaceAction()),
      ]);
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },
});

export default connect(mapState, mapDispatch)(CreateUserScreenContainer);
