import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';

import IcArrowBackNextGrey from '@dac/light-ui-assets/lib/icons/IcArrowBackNextGrey';

import Button from '../../Common/Button';
import TextInputField from '../../Common/TextInputField';
import PasswordInputField from '../../Common/PasswordInputField';

import styles from './styles';
import messages from './messages';
import { isRequired, email } from '../../../common/commonValidators';
import Form from '../../Common/Form';
import Link from '../../Common/Link';
import Text from '../../Common/Text';
import { colors } from '../../../common/theme';

export default function LoginCredentialsForm({
  handleSubmit,
  pristine,
  invalid,
  error,
  submitting,
}) {
  const isDisabled = pristine || (invalid && !pristine);

  return (
    <Form error={error} submitting={submitting}>
      <View
        style={styles.input}
      >
        <Field
          name="email"
          validate={[isRequired, email]}
          component={TextInputField}
          label={<FormattedMessage {...messages.email} />}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View
        style={styles.input}
      >
        <Field
          name="password"
          validate={[isRequired]}
          component={PasswordInputField}
          label={<FormattedMessage {...messages.password} />}
          autoCapitalize="none"
        />
      </View>

      <Link
        to="/forgot-password"
        style={styles.link}
        component={TouchableOpacity}
      >
        <Text
          underline
          size="small"
          color={colors.brownishGrey}
          style={styles.linkText}
        >
          <FormattedMessage {...messages.forgotPassword} />
        </Text>
      </Link>
      <View style={styles.buttonContainer}>
        <Button
          variant="contained"
          disabled={isDisabled}
          onPress={handleSubmit}
          rightIcon={(rightIconProps) => (
            <View style={styles.rotateArrow}>
              <IcArrowBackNextGrey {...rightIconProps} />
            </View>
          )}
        >
          <FormattedMessage {...messages.login} />
        </Button>
      </View>
    </Form>
  );
}

LoginCredentialsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.any,
  submitting: PropTypes.bool.isRequired,
};

LoginCredentialsForm.defaultProps = {
  error: null,
};
