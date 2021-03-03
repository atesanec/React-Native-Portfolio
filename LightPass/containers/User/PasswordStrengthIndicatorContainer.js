import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import zxcvbn from 'zxcvbn';

import PasswordStrengthIndicator from '../../components/User/PasswordStrengthIndicator';


const mapStateToProps = (state, { formName, fieldName }) => {
  const value = formValueSelector(formName)(state, fieldName);

  return { score: zxcvbn(value || '').score };
};

export default connect(mapStateToProps)(PasswordStrengthIndicator);
