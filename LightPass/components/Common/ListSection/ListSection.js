import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

function ListSection({
  children,
  title,
  style,
  titleStyle,
}) {
  return (
    <List.Section
      title={title}
      style={[styles.listSection, style]}
      titleStyle={titleStyle}
    >
      {children}
    </List.Section>
  );
}

ListSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
  titleStyle: PropTypes.node.isRequired,
};

ListSection.defaultTypes = {
  title: null,
  style: null,
  titleStyle: null,
};

export default ListSection.bind(List);
