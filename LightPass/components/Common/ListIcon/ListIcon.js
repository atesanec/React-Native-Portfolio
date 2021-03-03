import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';

function ListIcon({
  icon,
  color,
  style,
  size,
}) {
  return (
    <List.Icon
      icon={icon}
      color={color}
      style={style}
      size={size}
    />
  );
}

ListIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};

ListIcon.defaultProps = {
  size: null,
  color: null,
  style: null,
};

export default ListIcon.bind(List);
