import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLocale } from '../../reducers/config';
import MoreScreen from '../../components/Common/MoreScreen';

const mapState = createStructuredSelector({
  locale: getLocale,
});

export default connect(mapState, null)(MoreScreen);
