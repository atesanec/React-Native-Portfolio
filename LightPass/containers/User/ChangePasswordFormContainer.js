import { reduxForm } from 'redux-form';
import { formNames } from '../../common/commonConstants';
import ChangePasswordForm from '../../components/User/ChangePasswordForm';

export default reduxForm({
  form: formNames.changePassword,
})(ChangePasswordForm);
