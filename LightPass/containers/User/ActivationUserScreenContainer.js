import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import messages from '../../common/commonMessages';

import login from '../../actions/user/login';
import ActivationUserScreen from '../../components/User/ActivationUserScreen';
import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
import { showSnackBar } from '../../actionsGlobal/common';
import storeService from '../../common/storeService';
import showErrorMessage from '../../common/showErrorMessage';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import setUserPassword from '../../actions/user/setUserPassword';
import { setHost } from '../../actions/common';
import reportError from '../../common/reportError';

const mapState = null;

const mapDispatch = (dispatch, {
  workspaceDomain,
  token,
  email,
  onRedirectAndShowSnack,
}) => ({
  onComponentDidMount: async () => {
    const baseUrl = `https://${workspaceDomain}`;
    try {
      await storeService.addBaseUrl(baseUrl);
      dispatch(setHost(workspaceDomain));
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
    try {
      await login(dispatch)({ username: email, password });
      await onRedirectAndShowSnack();

      return { email };
    } catch (error) {
      throw mapApiErrorToSubmissionError(error);
    }
  },
});

const ActivationUserScreenContainer = withRouter(
  connect(
    mapState,
    mapDispatch,
  )(ActivationUserScreen),
);

const mapStateGlobal = null;

const mapDispatchGlobal = (dispatch, { email }) => ({
  onRedirectAndShowSnack: () => {
    dispatch(push('/passes/open-door'));

    // Temporary fix until username comes from backend
    const param = email || '';
    dispatch(showSnackBar({
      message: messages.activateAccountSnackBar,
      values: { username: param, email: param },
      variant: 'success',
    }));
  },
});

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(ActivationUserScreenContainer);
