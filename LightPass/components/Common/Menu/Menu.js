import React from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuBase } from 'react-native-paper';

function Menu({
  visible,
  anchor,
  onDismiss,
  children,
  contentStyle,
  style,
  selectedItemIndex,
  preferredAnchorDirection,
}) {
  return (
    <MenuBase
      onDismiss={onDismiss}
      visible={visible}
      anchor={anchor}
      contentStyle={contentStyle}
      preferredAnchorDirection={preferredAnchorDirection}
      style={style}
      selectedItemIndex={selectedItemIndex}
    >
      {children}
    </MenuBase>
  );
}
Menu.Item = MenuBase.Item;
Menu.propTypes = {
  visible: PropTypes.bool.isRequired,
  anchor: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  children: PropTypes.node,
  selectedItemIndex: PropTypes.number,
  contentStyle: PropTypes.object,
  style: PropTypes.object,
  preferredAnchorDirection: PropTypes.string,
};

Menu.defaultProps = {
  onDismiss: null,
  children: null,
  contentStyle: null,
  style: null,
  selectedItemIndex: null,
  preferredAnchorDirection: null,
};

export default Menu;
