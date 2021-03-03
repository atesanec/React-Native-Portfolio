import { reduxForm } from 'redux-form';
import { formNames } from '../../common/commonConstants';
import LoginCredentialsForm from '../../components/User/LoginCredentialsForm';

export default reduxForm({
  form: formNames.loginCredentials,
})(LoginCredentialsForm);
