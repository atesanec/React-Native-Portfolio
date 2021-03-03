import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { push } from 'connected-react-router';

import { createStructuredSelector } from 'reselect';
import config from '../../config';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import LoginWorkspaceScreen from '../../components/User/LoginWorkspaceScreen';
import showErrorMessage from '../../common/showErrorMessage';
import storeService from '../../common/storeService';
import {
  getPreviousBaseUrl,
  getCurrentBaseUrl,
} from '../../reducersGlobal/common/session';
import { setCurrentBaseUrl, openDialog } from '../../actionsGlobal/common';
import { dialogNames } from '../../common/commonConstants';
import reportError from '../../common/reportError';

const mapStateGlobal = createStructuredSelector({
  previousBaseUrl: getPreviousBaseUrl,
  currentBaseUrl: getCurrentBaseUrl,
});

const mapDispatchGlobal = (dispatch) => ({
  onGoBack: (baseUrl) => dispatch(setCurrentBaseUrl(baseUrl)),
  onOpenLoginWorkspaceAlertDialog: () => dispatch(openDialog(dialogNames.loginWorkspaceAlert)),

  onWorkspaceFormSubmit: async ({ placeLink }) => {
    let baseUrl = `https://${placeLink}.${config.workspace.workspaceSuffix}`;
    baseUrl = baseUrl.toLowerCase();

    try {
      await storeService.addBaseUrl(baseUrl);
      dispatch(push('/login/credentials'));
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },
});

const mergePropsGlobal = (stateProps, dispatchProps, ownProps) => {
  const {
    previousBaseUrl,
    onGoBackWithoutSideEffects,
    currentBaseUrl,
    onGoBack,
    ...props
  } = { ...ownProps, ...stateProps, ...dispatchProps };

  return {
    ...props,
    onGoBack: previousBaseUrl ? () => onGoBack(previousBaseUrl) : undefined,
  };
};

export default withRouter(
  connect(mapStateGlobal, mapDispatchGlobal, mergePropsGlobal, {
    context: GlobalStoreContext,
  })(LoginWorkspaceScreen),
);
