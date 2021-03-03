import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Snackbar from '../../components/Common/Snackbar';
import { hideSnackBar } from '../../actionsGlobal/common';
import { getSnackBar } from '../../reducersGlobal/common/ui';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';

const mapState = createStructuredSelector({
  snackBar: getSnackBar,
});

const mapDispatch = (dispatch) => ({
  onHideSnackBar: () => dispatch(hideSnackBar()),
});

export default connect(
  mapState,
  mapDispatch,
  null,
  { context: GlobalStoreContext },
)(Snackbar);
