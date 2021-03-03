import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserListScreen from '../../components/User/UserListScreen';
import { getUsers, getState, getError } from '../../reducers/user/list';
import getUserListAction from '../../actions/user/getUserList';
import showErrorMessage from '../../common/showErrorMessage';
import { getUser } from '../../reducers/user/current';
import reportError from '../../common/reportError';

const mapState = createStructuredSelector({
  user: getUser,
  userList: getUsers,
  userListState: getState,
  userListError: getError,
});

const mapDispatch = (dispatch) => ({
  onComponentDidMount: async () => {
    try {
      await dispatch(getUserListAction());
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },
});

export default connect(
  mapState,
  mapDispatch,
)(UserListScreen);
