import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styles from './styles';
import { colors } from '../../../common/theme';
import Text from '../Text';

function Record({ fieldNameMessage, fieldValue }) {
  return (
    <View style={styles.fieldContainer}>
      <View style={styles.fieldName}>
        <Text color={colors.brownishGrey}>
          <FormattedMessage {...fieldNameMessage} />
        </Text>
      </View>
      {fieldValue ? (
        <View style={styles.fieldValue}>
          <Text color={colors.brownishGrey}>{fieldValue}</Text>
        </View>
      ) : null}
    </View>
  );
}

Record.propTypes = {
  fieldNameMessage: PropTypes.object.isRequired,
  fieldValue: PropTypes.node,
};

Record.defaultProps = {
  fieldValue: null,
};

export default Record;
