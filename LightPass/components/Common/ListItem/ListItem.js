import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

function ListItem({
  disabled,
  variant,
  title,
  titleStyle,
  description,
  left,
  right,
  onPress,
  style,
  descriptionStyle,
  descriptionNumberOfLines,
  centeredTitle,
  selected,
  onLayout,
}) {
  return (
    <List.Item
      title={title}
      titleStyle={[styles.title, titleStyle]}
      description={description}
      descriptionStyle={[styles.description, descriptionStyle]}
      descriptionNumberOfLines={descriptionNumberOfLines}
      centeredTitle={centeredTitle}
      left={left}
      right={right}
      onPress={onPress}
      selected={selected}
      variant={variant}
      style={style}
      disabled={disabled}
      onLayout={onLayout}
    />
  );
}

ListItem.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  centeredTitle: PropTypes.bool,
  selected: PropTypes.bool,
  title: PropTypes.node.isRequired,
  left: PropTypes.func,
  right: PropTypes.func,
  style: PropTypes.object,
  onPress: PropTypes.func,
  titleStyle: PropTypes.object,
  description: PropTypes.node,
  descriptionStyle: PropTypes.object,
  descriptionNumberOfLines: PropTypes.number,
  onLayout: PropTypes.func,
  disabled: PropTypes.bool,
};

ListItem.defaultProps = {
  disabled: undefined,
  variant: 'primary',
  centeredTitle: undefined,
  left: null,
  right: null,
  style: null,
  onPress: null,
  titleStyle: null,
  description: null,
  descriptionStyle: null,
  descriptionNumberOfLines: null,
  selected: null,
  onLayout: null,
};

export default ListItem.bind(List);
