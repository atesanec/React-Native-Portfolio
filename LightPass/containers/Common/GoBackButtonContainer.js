import { connect } from 'react-redux';

import { goBack } from 'connected-react-router';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import Button from '../../components/Common/Button';


const mapStateGlobal = null;

const mapDispatchGlobal = (dispatch) => ({
  onPress: () => dispatch(goBack()),
});

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(Button);
