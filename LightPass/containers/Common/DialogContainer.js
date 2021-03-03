import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import Dialog from '../../components/Common/Dialog';
import { getDialogName } from '../../reducersGlobal/common/ui';
import { closeDialog } from '../../actionsGlobal/common';


const mapStateGlobal = createStructuredSelector({ curentDialogName: getDialogName });

const mapDispatchGlobal = (dispatch, { dialogName }) => ({
  onDismiss: () => dispatch(closeDialog(dialogName)),
});

const mergePropsGlobal = (stateProps, dispatchProps, ownProps) => {
  const { curentDialogName, dialogName, ...props } = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
  return { ...props, visible: curentDialogName === dialogName };
};

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  mergePropsGlobal,
  { context: GlobalStoreContext },
)(Dialog);
