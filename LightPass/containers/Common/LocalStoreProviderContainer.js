import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getBaseUrls, getCurrentBaseUrl } from '../../reducersGlobal/common/session';
import LocalStoreProvider from '../../components/Common/LocalStoreProvider';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';

const mapState = createStructuredSelector({
  baseUrls: getBaseUrls,
  currentBaseUrl: getCurrentBaseUrl,
});

const mapDispatch = {};

export default connect(
  mapState,
  mapDispatch,
  null,
  { context: GlobalStoreContext },
)(LocalStoreProvider);
