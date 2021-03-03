import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { goBack } from 'connected-react-router';
import login from '../../actions/user/login';
import LoginCredentialsScreen from '../../components/User/LoginCredentialsScreen';
import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import { getCurrentBaseUrl } from '../../reducersGlobal/common/session';
import storeService from '../../common/storeService';
import showErrorMessage from '../../common/showErrorMessage';
import reportError from '../../common/reportError';

const mapStateGlobal = createStructuredSelector({
  currentBaseUrl: getCurrentBaseUrl,
});

const mapDispatchGlobal = (dispatch) => ({
  onGoBack: async (baseUrl) => {
    try {
      await storeService.removeBaseUrl(baseUrl);
      dispatch(goBack());
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },
});

const mergePropsGlobal = (stateProps, dispatchProps, ownProps) => {
  const { onGoBack, currentBaseUrl, ...props } = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };

  return { ...props, onGoBack: () => onGoBack(currentBaseUrl) };
};

const LoginCredentialsScreenContainer = connect(
  mapStateGlobal,
  mapDispatchGlobal,
  mergePropsGlobal,
  { context: GlobalStoreContext },
)(LoginCredentialsScreen);

const mapState = null;

const mapDispatch = (dispatch) => ({
  onCredentialsFormSubmit: ({ email, password }) => login(dispatch)({
    username: email,
    password,
  }).catch((e) => Promise.reject(mapApiErrorToSubmissionError(e))),
});

export default connect(
  mapState,
  mapDispatch,
)(LoginCredentialsScreenContainer);
