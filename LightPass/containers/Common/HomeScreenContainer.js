import { connect } from 'react-redux';
import logout from '../../actions/user/logout';
import HomeScreen from '../../components/Common/HomeScreen';
import showErrorMessage from '../../common/showErrorMessage';
import reportError from '../../common/reportError';

const mapState = null;

const mapDispatch = (dispatch) => ({
  onLogout: () => {
    try {
      dispatch(logout());
    } catch (error) {
      showErrorMessage(error);
      reportError(error);
    }
  },
});

export default connect(mapState, mapDispatch)(HomeScreen);
