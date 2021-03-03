import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

function Content({ children, style }) {
  return (
    <SafeAreaView style={styles.content}>
      <View style={[styles.wrapper, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

Content.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

Content.defaultProps = {
  style: null,
  children: null,
};

export default Content;
