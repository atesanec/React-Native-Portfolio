import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';

import Form from '../../Common/Form';
import TextInputField from '../../Common/TextInputField';
import SelectField from '../../Common/SelectField';
import { isRequired } from '../../../common/commonValidators';
import messages from './messages';
import styles from './styles';
import Button from '../../Common/Button';

const OPTION_DATA = [
  { value: false, label: messages.optionEverybody },
  { value: true, label: messages.optionNobody },
];

function EditAccoutnForm({
  intl,
  error,
  submitting,
  pristine,
  invalid,
  onCancel,
  handleSubmit,
}) {
  const isDisabled = pristine || (invalid && !pristine);
  const isPhoneNumberVisible = false;

  return (
    <Form error={error} submitting={submitting}>
      <View style={styles.inputs}>
        <View style={styles.inputWrapper}>
          <Field
            name="displayName"
            validate={isRequired}
            component={TextInputField}
            label={<FormattedMessage {...messages.displayName} />}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Field
            name="isEmailPrivate"
            component={SelectField}
            style={styles.select}
            labelExtractor={({ label }) => intl.formatMessage(label)}
            label={<FormattedMessage {...messages.isEmailPrivate} />}
            data={OPTION_DATA}
          />
        </View>
        {isPhoneNumberVisible && (
          <>
            <View style={styles.inputWrapper}>
              <View style={styles.phoneNumberWrapper}>
                <View style={styles.countryField}>
                  <Field
                    name="countryCode"
                    component={TextInputField}
                    label={<FormattedMessage {...messages.country} />}
                    keyboardType="phone-pad"
                  />
                </View>
                <View style={styles.phoneField}>
                  <Field
                    name="nationalNumber"
                    component={TextInputField}
                    label={<FormattedMessage {...messages.phoneNumber} />}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Field
                name="isPhonePrivate"
                component={SelectField}
                style={styles.select}
                labelExtractor={({ label }) => intl.formatMessage(label)}
                label={<FormattedMessage {...messages.isPhonePrivate} />}
                data={OPTION_DATA}
              />
            </View>
          </>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <FormattedMessage {...messages.cancel}>
          {(nodes) => (
            <Button
              variant="outlined"
              style={styles.cancelButton}
              onPress={onCancel}
            >
              {nodes}
            </Button>
          )}
        </FormattedMessage>
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

EditAccoutnForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.any,
  intl: PropTypes.any.isRequired,
  submitting: PropTypes.bool.isRequired,
};

EditAccoutnForm.defaultProps = {
  error: null,
};

export default EditAccoutnForm;
