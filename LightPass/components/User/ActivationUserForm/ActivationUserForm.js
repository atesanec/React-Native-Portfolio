import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import Paragraph from '../../Common/Paragraph';

import PasswordInputField from '../../Common/PasswordInputField';
import Button from '../../Common/Button';
import CheckBoxField from '../../Common/CheckBoxField';
import Form from '../../Common/Form';
import TextInput from '../../Common/TextInput';

import { isRequired, password } from '../../../common/commonValidators';
import styles from './styles';
import messages from './messages';
import PasswordStrengthIndicatorContainer from '../../../containers/User/PasswordStrengthIndicatorContainer';
import { formNames } from '../../../common/commonConstants';

function ActivationUserForm({
  handleSubmit,
  isPasswordNotWeak,
  termsAndPolicyValue,
  pristine,
  invalid,
  error,
  submitting,
  email,
}) {
  const isDisabled = !termsAndPolicyValue
    || !isPasswordNotWeak || pristine || (invalid && !pristine);

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
            label={<FormattedMessage {...messages.password} />}
            autoCapitalize="none"
          />
        </View>
      </View>
      <PasswordStrengthIndicatorContainer
        fieldName="password"
        formName={formNames.activationAccount}
      />
      <View style={[styles.inputWrapper, styles.checkboxContainer]}>
        <Field
          name="termsAndPolicy"
          type="checkbox"
          validate={[isRequired]}
          component={CheckBoxField}
        />
        <Paragraph style={styles.checkboxTitle}>
          <FormattedMessage {...messages.termsAndPolicy} />
        </Paragraph>
      </View>

      <View style={styles.buttonContainer}>
        <FormattedMessage {...messages.completeButton}>
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

ActivationUserForm.propTypes = {
  isPasswordNotWeak: PropTypes.bool.isRequired,
  termsAndPolicyValue: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  email: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.any,
};

ActivationUserForm.defaultProps = {
  termsAndPolicyValue: null,
  error: null,
  email: '',
};

export default ActivationUserForm;
