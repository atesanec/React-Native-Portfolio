import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

function ListSubheader({ children }) {
  return (
    <List.Subheader style={styles.subheader}>
      {children}
    </List.Subheader>
  );
}

ListSubheader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListSubheader.bind(List);
