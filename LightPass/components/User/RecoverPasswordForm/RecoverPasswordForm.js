import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import zxcvbn from 'zxcvbn';

import PasswordInputField from '../../Common/PasswordInputField';
import Button from '../../Common/Button';
import Form from '../../Common/Form';

import { isRequired, password } from '../../../common/commonValidators';
import styles from './styles';
import messages from './messages';
import PasswordStrengthIndicator from '../PasswordStrengthIndicator';
import TextInput from '../../Common/TextInput';

function RecoverPasswordForm({
  handleSubmit,
  pristine,
  invalid,
  error,
  submitting,
  email,
  passwordValue,
}) {
  const isDisabled = pristine || (invalid && !pristine);

  return (
    <Form error={error} submitting={submitting}>
      <View style={styles.inputWrapper}>
        <View style={styles.input}>
          <TextInput
            disabled
            value={email}
            label={<FormattedMessage {...messages.email} />}
          />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.input}>
          <Field
            name="password"
            validate={[isRequired, password]}
            component={PasswordInputField}
            label={<FormattedMessage {...messages.setNewPassword} />}
            autoCapitalize="none"
          />
        </View>
      </View>
      <PasswordStrengthIndicator score={zxcvbn(passwordValue).score} />
      <View style={styles.buttonContainer}>
        <FormattedMessage {...messages.save}>
          {(nodes) => (
            <Button
              variant="contained"
              disabled={isDisabled}
              onPress={handleSubmit}
            >
              {nodes}
            </Button>
          )}
        </FormattedMessage>
      </View>
    </Form>
  );
}

RecoverPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  workspaceDisplayName: PropTypes.string.isRequired,
  workspaceDomain: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  passwordValue: PropTypes.string,
  error: PropTypes.any,
};

RecoverPasswordForm.defaultProps = {
  error: null,
  passwordValue: '',
};

export default RecoverPasswordForm;
