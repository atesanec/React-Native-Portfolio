import { connect } from 'react-redux';

import deleteUser from '../../actions/user/deleteUser';
import updateUser from '../../actions/user/updateUser';
import getUserList from '../../actions/user/getUserList';
import showErrorMessage from '../../common/showErrorMessage';
import UserListItem from '../../components/User/UserListItem';
import reportError from '../../common/reportError';

const mapState = null;

const mapDispatch = (dispatch, { user }) => ({
  onDelete: async () => {
    try {
      await dispatch(deleteUser({ id: user.id }));
      await dispatch(getUserList());
    } catch (error) {
      showErrorMessage(error);
      throw reportError(error);
    }
  },
  onUpdateToAdmin: async () => {
    try {
      await dispatch(updateUser({ id: user.id, isAdmin: true }));
      await dispatch(getUserList());
    } catch (error) {
      showErrorMessage(error);
      throw reportError(error);
    }
  },
  onUpdateToUser: async () => {
    try {
      await dispatch(updateUser({ id: user.id, isAdmin: false }));
      await dispatch(getUserList());
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
      throw error;
    }
  },
});

export default connect(
  mapState,
  mapDispatch,
)(UserListItem);
