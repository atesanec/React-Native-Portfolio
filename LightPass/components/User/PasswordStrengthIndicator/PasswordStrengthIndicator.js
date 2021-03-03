import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles';
import Text from '../../Common/Text';
import { colors } from '../../../common/theme';

const passStrengthLabels = [messages.weak, messages.medium, messages.strong];

function PasswordStrengthIndicator({ score }) {
  let scoreByThree;
  if (score === 1 || score === 2) scoreByThree = 1;
  else if (score === 3 || score === 4) scoreByThree = 2;
  else scoreByThree = 0;

  const styleByScore = scoreByThree > 1 ? styles.strong : styles.weekMedium;

  return (
    <View style={styles.passMeter}>
      <View style={styles.levelList}>
        {passStrengthLabels.map((label, index) => (
          <View key={label.id} style={styles.level}>
            <View
              style={[
                styles.levelBorder,
                scoreByThree >= index ? styleByScore : null,
              ]}
            />
          </View>
        ))}
      </View>
      <Text color={colors.brownishGrey} style={styles.levelLabel}>
        <FormattedMessage {...passStrengthLabels[scoreByThree]} />
      </Text>
    </View>
  );
}

PasswordStrengthIndicator.propTypes = {
  score: PropTypes.number.isRequired,
};

export default PasswordStrengthIndicator;
