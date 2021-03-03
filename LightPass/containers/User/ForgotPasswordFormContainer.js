import { reduxForm } from 'redux-form';
import { formNames } from '../../common/commonConstants';

import ForgetPasswordForm from '../../components/User/ForgotPasswordForm';

export default reduxForm({
  form: formNames.forgetPassword,
})(ForgetPasswordForm);
