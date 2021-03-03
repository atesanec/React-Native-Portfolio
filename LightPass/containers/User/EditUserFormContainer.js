import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import GlobalStoreContext from '../../components/Common/GlobalStoreContext';
import { formNames } from '../../common/commonConstants';
import EditUserForm from '../../components/User/EditUserForm';

const mapStateGlobal = null;

const mapDispatchGlobal = (dispatch) => ({
  onCancel: () => dispatch(goBack()),
});

export default connect(mapStateGlobal, mapDispatchGlobal, null, {
  context: GlobalStoreContext,
})(
  injectIntl(
    reduxForm({
      form: formNames.editAccount,
    })(EditUserForm),
  ),
);
