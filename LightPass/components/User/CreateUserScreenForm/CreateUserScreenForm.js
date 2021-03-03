import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { Field } from 'redux-form';
import Button from '../../Common/Button';
import TextInputField from '../../Common/TextInputField';

import styles from './styles';
import messages from './messages';
import { isRequired, email } from '../../../common/commonValidators';
import Form from '../../Common/Form';

function CreateUserScreenForm({
  handleSubmit,
  pristine,
  invalid,
  error,
  submitting,
}) {
  const isDisabled = pristine || (invalid && !pristine);

  return (
    <Form error={error} submitting={submitting}>
      <View style={styles.inputs}>
        <View style={styles.inputWrapper}>
          <Field
            name="displayName"
            validate={[isRequired]}
            component={TextInputField}
            label={<FormattedMessage {...messages.displayName} />}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Field
            name="email"
            validate={[isRequired, email]}
            component={TextInputField}
            label={<FormattedMessage {...messages.email} />}
            autoCapitalize="none"
          />
        </View>
      </View>
      <FormattedMessage {...messages.sendInvitation}>
        {(nodes) => (
          <Button
            variant="contained"
            style={styles.button}
            disabled={isDisabled}
            onPress={handleSubmit}
          >
            {nodes}
          </Button>
        )}
      </FormattedMessage>
    </Form>
  );
}

CreateUserScreenForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.any,
  submitting: PropTypes.bool.isRequired,
};

CreateUserScreenForm.defaultProps = {
  error: null,
};

export default CreateUserScreenForm;
