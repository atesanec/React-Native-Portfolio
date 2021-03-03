import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { formNames } from '../../common/commonConstants';
import RecoverPasswordForm from '../../components/User/RecoverPasswordForm';

const getFormValue = formValueSelector(formNames.recoverPassword);

const mapStateToProps = (state) => ({
  passwordValue: getFormValue(state, 'password'),
});

export default connect(mapStateToProps)(
  reduxForm({ form: formNames.recoverPassword })(RecoverPasswordForm),
);
