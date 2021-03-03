import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import updateUserPassword from '../../actions/user/updateUserPassword';
import getUserAction from '../../actions/user/getUser';
import getWorkspaceAction from '../../actions/workspace/getWorkspace';

import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
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
import ChangePasswordScreen from '../../components/User/ChangePasswordScreen';
import showErrorMessage from '../../common/showErrorMessage';
import reportError from '../../common/reportError';

const mapState = createStructuredSelector({
  user: getUser,
  userState: getUserState,
  userError: getUserError,
  workspace: getWorkspace,
  workspaceError: getWorkspaceError,
  workspaceState: getWorkspaceState,
});

const mapDispatch = (dispatch) => ({
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
  onSubmit: async ({ oldPassword, newPassword }) => {
    try {
      await dispatch(updateUserPassword({ newPassword, oldPassword }));
    } catch (error) {
      throw mapApiErrorToSubmissionError(error);
    }
  },
});

export default connect(
  mapState,
  mapDispatch,
)(ChangePasswordScreen);
