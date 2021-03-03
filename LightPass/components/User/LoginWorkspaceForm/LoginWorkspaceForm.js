import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import IcArrowBackNextGrey from '@dac/light-ui-assets/lib/icons/IcArrowBackNextGrey';
import { FormattedMessage } from 'react-intl';
import { DefaultTheme } from 'react-native-paper';
import { Field } from 'redux-form';
import Text from '../../Common/Text';

import Button from '../../Common/Button';
import TextInputField from '../../Common/TextInputField';

import styles from './styles';
import messages from './messages';
import { isRequired } from '../../../common/commonValidators';
import { workspaceName } from '../../../workspace/workspaceValidators';
import config from '../../../config';
import Form from '../../Common/Form';
import Link from '../../Common/Link';
import Placeholder from '../../Common/Placeholder';
import { colors } from '../../../common/theme';

function LoginWorkspaceForm({
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
      <Placeholder
        description={(descriptionProps) => (
          <>
            <Text {...descriptionProps}>
              <FormattedMessage {...messages.info1} />
            </Text>
            <Text {...descriptionProps}>
              <FormattedMessage {...messages.info2} />
            </Text>
          </>
        )}
      />

      <View style={styles.workspaceInputWrapper}>
        <View style={styles.input}>
          <Field
            name="placeLink"
            validate={[isRequired, workspaceName]}
            component={TextInputField}
            autoCapitalize="none"
            label={<FormattedMessage {...messages.placeLink} />}
          />
        </View>
        <Text
          size="small"
          color={labelColor}
          style={styles.suffix}
        >
          {config.workspace.workspaceSuffix}
        </Text>
      </View>
      <Link
        to="/forgot-workspace"
        style={styles.link}
        component={TouchableOpacity}
      >
        <Text
          size="small"
          underline
          color={colors.brownishGrey}
          style={styles.linkText}
        >
          <FormattedMessage {...messages.forgotPlaceLink} />
        </Text>
      </Link>
      <View style={styles.buttonContainer}>
        <FormattedMessage {...messages.nextButton}>
          {(nodes) => (
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
              {nodes}
            </Button>
          )}
        </FormattedMessage>
      </View>
    </Form>
  );
}

LoginWorkspaceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.any,
  submitting: PropTypes.bool.isRequired,
};

LoginWorkspaceForm.defaultProps = {
  error: null,
};

export default LoginWorkspaceForm;
