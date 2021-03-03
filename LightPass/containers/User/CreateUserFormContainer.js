import { reduxForm } from 'redux-form';
import { formNames } from '../../common/commonConstants';
import CreateUserScreenForm from '../../components/User/CreateUserScreenForm';

export default reduxForm({
  form: formNames.createUsers,
})(CreateUserScreenForm);
