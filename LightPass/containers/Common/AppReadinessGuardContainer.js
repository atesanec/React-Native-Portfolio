import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getIsReady } from '../../reducersGlobal/common/ui';
import AppReadinessGuard from '../../components/Common/AppReadinessGuard';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';

const mapState = createStructuredSelector({
  isReady: getIsReady,
});

const mapDispatch = {};

export default connect(
  mapState,
  mapDispatch,
  null,
  { context: GlobalStoreContext },
)(AppReadinessGuard);
