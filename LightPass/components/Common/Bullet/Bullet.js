import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Text from '../Text';

function Bullet({ text, style }) {
  const isTextFunc = typeof text === 'function';

  const children = isTextFunc ? (
    <View styles={[styles.textWrapping]}>{text(styles.textColor)}</View>
  ) : (
    <Text style={[styles.textColor, styles.textWrapping]}>{text}</Text>
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.bullet} />
      {children}
    </View>
  );
}

Bullet.propTypes = {
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  style: PropTypes.any,
};

Bullet.defaultProps = {
  text: null,
  style: null,
};

export default Bullet;
