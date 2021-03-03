import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import showErrorMessage from '../../common/showErrorMessage';
import UserDetailsScreen from '../../components/User/UserDetailsScreen';
import getUserAction from '../../actions/user/getUser';
import { createSelectorsByUserId } from '../../reducers/user/byId';
import { getUser, getState, getError } from '../../reducers/user/current';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import reportError from '../../common/reportError';

const mapState = (state, { id }) => {
  const {
    getUser: getUserData,
    getState: getUserState,
    getError: getUserError,
  } = createSelectorsByUserId(id);

  return createStructuredSelector({
    user: getUserData,
    userState: getUserState,
    userError: getUserError,
    currentUser: getUser,
    currentUserState: getState,
    currentUserError: getError,
  })(state);
};
const mapDispatch = (dispatch, { id }) => ({
  onComponentDidMount: async () => {
    try {
      await dispatch(getUserAction());
      await dispatch(getUserAction({ id }));
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },
});

const UserDetailsScreenContainer = connect(
  mapState,
  mapDispatch,
)(UserDetailsScreen);

const mapStateGlobal = null;
const mapDispatchGlobal = (dispatch) => ({
  onGoToChangePassword: () => dispatch(push('/change-password')),
});

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(UserDetailsScreenContainer);
