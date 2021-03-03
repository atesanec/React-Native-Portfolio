import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';

import { DefaultTheme } from 'react-native-paper';
import TextInputField from '../../Common/TextInputField';
import Button from '../../Common/Button';
import Form from '../../Common/Form';
import Paragraph from '../../Common/Paragraph';

import { isRequired, email } from '../../../common/commonValidators';
import styles from './styles';
import messages from './messages';
import config from '../../../config';
import { workspaceName } from '../../../workspace/workspaceValidators';

function ForgotPasswordForm({
  handleSubmit,
  pristine,
  invalid,
  error,
  submitting,
}) {
  const isDisabled = pristine || (invalid && !pristine);
  const labelColor = invalid
    ? DefaultTheme.colors.placeholder
    : DefaultTheme.colors.accent;

  return (
    <Form error={error} submitting={submitting}>
      <View style={styles.workspaceInputWrapper}>
        <View style={styles.inputWrapper}>
          <Field
            style={styles.input}
            name="baseUrlHost"
            validate={[isRequired, workspaceName]}
            component={TextInputField}
            label={<FormattedMessage {...messages.placeLink} />}
            autoCapitalize="none"
          />
        </View>
        <Paragraph style={{ color: labelColor, ...styles.suffix }}>
          {config.workspace.workspaceSuffix}
        </Paragraph>
      </View>
      <Field
        style={styles.input}
        name="email"
        validate={[isRequired, email]}
        component={TextInputField}
        label={<FormattedMessage {...messages.email} />}
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button
          variant="contained"
          disabled={isDisabled}
          onPress={handleSubmit}
        >
          <FormattedMessage {...messages.recover} />
        </Button>
      </View>
    </Form>
  );
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.any,
};

ForgotPasswordForm.defaultProps = {
  error: null,
};

export default ForgotPasswordForm;
