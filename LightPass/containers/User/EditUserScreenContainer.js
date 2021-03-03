import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import updateUser from '../../actions/user/updateUser';
import getUserAction from '../../actions/user/getUser';
import EditUserScreen from '../../components/User/EditUserScreen';
import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
import { getUser, getState, getError } from '../../reducers/user/current';
import showErrorMessage from '../../common/showErrorMessage';

const mapState = createStructuredSelector({
  user: getUser,
  userState: getState,
  userError: getError,
});

const mapDispatch = (dispatch) => ({
  onSubmit: async ({
    displayName,
    isEmailPrivate,
  }) => {
    try {
      await dispatch(updateUser({
        displayName,
        isEmailPrivate,
      }));
      await dispatch(getUserAction());
    } catch (error) {
      throw mapApiErrorToSubmissionError(error);
    }
  },

  onComponentDidMount: () => {
    dispatch(getUserAction()).catch(showErrorMessage);
  },
});

export default connect(mapState, mapDispatch)(EditUserScreen);
