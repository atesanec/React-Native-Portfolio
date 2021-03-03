import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import setUserPassword from '../../actions/user/setUserPassword';

import { showSnackBar } from '../../actionsGlobal/common';
import login from '../../actions/user/login';

import RecoverPasswordScreen from '../../components/User/RecoverPasswordScreen';
import messages from '../../common/commonMessages';
import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
import storeService from '../../common/storeService';
import showErrorMessage from '../../common/showErrorMessage';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import { setHost } from '../../actions/common';
import reportError from '../../common/reportError';

const mapState = null;

const mapDispatch = (dispatch, {
  token,
  workspaceDomain: host,
  email,
  onRedirectAndShowSnack,
}) => ({
  onComponentDidMount: async () => {
    try {
      const baseUrl = `https://${host}`;
      await storeService.addBaseUrl(baseUrl);
      dispatch(setHost(host));
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },

  onSubmit: async ({ password }) => {
    try {
      await dispatch(setUserPassword({ token, newPassword: password }));

      return { password };
    } catch (error) {
      throw mapApiErrorToSubmissionError(error);
    }
  },
  onSubmitSuccess: async ({ password }) => {
    await login(dispatch)({ username: email, password });

    onRedirectAndShowSnack();
  },
});

const RecoverPasswordScreenContainer = connect(
  mapState,
  mapDispatch,
)(RecoverPasswordScreen);

const mapStateGlobal = null;

const mapDispatchGlobal = (dispatch) => ({
  onGoBack: () => dispatch(push('/login/workspace')),
  onRedirectAndShowSnack: () => {
    dispatch(push('/passes/open-door'));
    dispatch(showSnackBar({ message: messages.recoverPasswordSnackBar }));
  },
});

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(RecoverPasswordScreenContainer);
