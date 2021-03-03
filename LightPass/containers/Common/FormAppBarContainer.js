import { connect } from 'react-redux';
import { submit, isPristine, isInvalid } from 'redux-form';
import { goBack } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import FormAppBar from '../../components/Common/FormAppBar';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';

const mapState = (state, { formName }) => createStructuredSelector({
  pristine: isPristine(formName),
  invalid: isInvalid(formName),
})(state);

const mapDispatch = (dispatch, { formName }) => ({
  onDone: () => dispatch(submit(formName)),
});

const FormAppBarContainer = connect(
  mapState,
  mapDispatch,
)(FormAppBar);

const mapStateGlobal = null;
const mapDispatchGlobal = (dispatch) => ({
  onGoBack: () => dispatch(goBack()),
});

export default connect(
  mapStateGlobal,
  mapDispatchGlobal,
  null,
  { context: GlobalStoreContext },
)(FormAppBarContainer);
