import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import AppBar from '../../components/Common/AppBar';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';

const mapStateGlobal = null;
const mapDispatchGlobal = (dispatch) => ({
  onHistoryGoBack: () => dispatch(goBack()),
});

const mergePropsGlobal = (stateProps, dispatchProps, ownProps) => {
  const {
    onGoBack,
    onHistoryGoBack,
    ...props
  } = { ...ownProps, ...stateProps, ...dispatchProps };

  return {
    ...props,
    onGoBack: onGoBack !== undefined
      ? onGoBack
      : onHistoryGoBack,
  };
};

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  mergePropsGlobal,
  { context: GlobalStoreContext },
)(AppBar);
