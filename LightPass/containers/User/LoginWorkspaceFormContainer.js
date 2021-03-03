import { reduxForm } from 'redux-form';
import { formNames } from '../../common/commonConstants';
import LoginWorkspaceForm from '../../components/User/LoginWorkspaceForm';

export default reduxForm({
  form: formNames.loginWorkspace,
})(LoginWorkspaceForm);
