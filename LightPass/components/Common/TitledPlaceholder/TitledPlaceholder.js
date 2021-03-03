import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './styles';
import Title from '../Title/Title';
import Divider from '../Divider';

function TitledPlaceholder({
  title,
  description,
  style,
}) {
  return (
    <View style={style}>
      <Title style={styles.placeholderTitle}>
        {title}
      </Title>
      <Divider />
      {description({ style: styles.placeholderDescription })}
    </View>
  );
}

TitledPlaceholder.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.func.isRequired,
  style: PropTypes.object,
};

TitledPlaceholder.defaultProps = {
  style: null,
};

export default TitledPlaceholder;
