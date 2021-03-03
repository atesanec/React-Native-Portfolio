import { reduxForm } from 'redux-form';

import { formNames } from '../../common/commonConstants';
import ActivationUserForm from '../../components/User/ActivationUserForm';

export default reduxForm({ form: formNames.activationAccount })(ActivationUserForm);
