import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';

import Form from '../../Common/Form';
import { isRequired, password } from '../../../common/commonValidators';

import messages from './messages';
import styles from './styles';
import PasswordInputField from '../../Common/PasswordInputField';
import { formNames } from '../../../common/commonConstants';
import PasswordStrengthIndicatorContainer from '../../../containers/User/PasswordStrengthIndicatorContainer';

function ChangePasswordForm({ error, submitting }) {
  return (
    <Form error={error} submitting={submitting}>
      <View style={styles.inputWrapper}>
        <Field
          name="oldPassword"
          component={PasswordInputField}
          label={<FormattedMessage {...messages.oldPassword} />}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Field
          name="newPassword"
          validate={[isRequired, password]}
          component={PasswordInputField}
          label={<FormattedMessage {...messages.newPassword} />}
          autoCapitalize="none"
        />
      </View>
      <PasswordStrengthIndicatorContainer
        fieldName="newPassword"
        formName={formNames.changePassword}
      />
    </Form>
  );
}

ChangePasswordForm.propTypes = {
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.any,
  submitting: PropTypes.bool.isRequired,
};

ChangePasswordForm.defaultProps = {
  error: null,
};

export default ChangePasswordForm;
