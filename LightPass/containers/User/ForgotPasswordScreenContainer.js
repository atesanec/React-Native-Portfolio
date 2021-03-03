import * as url from 'url';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import resetPassword from '../../actions/user/resetPassword';
import ForgotPasswordScreen from '../../components/User/ForgotPasswordScreen';
import mapApiErrorToSubmissionError from '../../common/mapApiErrorToSubmissionError';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import { setCurrentBaseUrl } from '../../actionsGlobal/common';
import { getCurrentBaseUrl } from '../../reducersGlobal/common/session';
import config from '../../config';


const mapState = null;

const mapDispatch = (dispatch, { onSetCurrentBaseUrl }) => ({
  onSubmit: async ({ email, baseUrlHost }) => {
    try {
      const baseUrl = `https://${baseUrlHost}.${config.workspace.workspaceSuffix}`;

      onSetCurrentBaseUrl(baseUrl);
      await dispatch(resetPassword({ email }));
    } catch (error) {
      throw mapApiErrorToSubmissionError(error);
    }
  },
});

const ForgotPasswordScreenContainer = connect(mapState, mapDispatch)(ForgotPasswordScreen);


const mapStateGlobal = createStructuredSelector({ baseUrl: getCurrentBaseUrl });

const mapDispatchGlobal = (dispatch) => ({
  onSetCurrentBaseUrl: (baseUrl) => dispatch(setCurrentBaseUrl(baseUrl)),
  onSubmitSuccess: () => dispatch(push('/check-email')),
});


const mergePropsGlobal = (stateProps, dispatchProps, ownProps) => {
  const {
    baseUrl,
    ...props
  } = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
  const suffixLength = config.workspace.workspaceSuffix.length;
  const { hostname } = url.parse(baseUrl);
  const baseUrlHost = hostname?.slice(0, hostname.length - suffixLength - 1) || '';

  return {
    ...props,
    baseUrlHost,
  };
};


export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  mergePropsGlobal,
  { context: GlobalStoreContext },
)(ForgotPasswordScreenContainer);
