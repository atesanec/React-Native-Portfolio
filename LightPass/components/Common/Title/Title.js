import React from 'react';
import PropTypes from 'prop-types';
import { Title as TitleBase } from 'react-native-paper';
import styles from './styles';

function Title({ style, children }) {
  return (
    <TitleBase style={[styles.title, style]}>
      {children}
    </TitleBase>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Title.defaultProps = {
  style: null,
};


export default Title;
