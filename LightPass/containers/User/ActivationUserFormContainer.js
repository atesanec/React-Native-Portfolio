import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import zxcvbn from 'zxcvbn';
import ActivationUserForm from '../../components/User/ActivationUserForm';
import { formNames } from '../../common/commonConstants';

const mapStateToProps = (state) => {
  const passwordValue = formValueSelector(formNames.activationAccount)(
    state,
    'password',
  );
  const termsAndPolicyValue = formValueSelector(formNames.activationAccount)(
    state,
    'termsAndPolicy',
  );
  return {
    isPasswordNotWeak: zxcvbn(passwordValue || '').score > 0,
    termsAndPolicyValue,
  };
};

export default connect(mapStateToProps)(
  reduxForm({ form: formNames.activationAccount })(ActivationUserForm),
);
