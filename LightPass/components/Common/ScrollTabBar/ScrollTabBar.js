import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import styles from './styles';

function ScrollTabBar({ children, style }) {
  return (
    <ScrollView
      horizontal
      style={style}
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

ScrollTabBar.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.any,
};

ScrollTabBar.defaultProps = {
  style: null,
};

export default ScrollTabBar;
