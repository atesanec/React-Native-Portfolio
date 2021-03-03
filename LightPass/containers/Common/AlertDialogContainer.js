import { connect } from 'react-redux';

import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import { closeDialog } from '../../actionsGlobal/common';
import AlertDialog from '../../components/Common/AlertDialog';


const mapStateGlobal = null;

const mapDispatchGlobal = (dispatch, { dialogName }) => ({
  onDismiss: () => dispatch(closeDialog(dialogName)),
});

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(AlertDialog);
