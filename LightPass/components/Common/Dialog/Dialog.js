import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Dialog as DialogBase } from 'react-native-paper';
import styles from './styles';

function Dialog({
  visible,
  title,
  titleStyle,
  content,
  contentStyle,
  onDismiss,
  dismissable,
  style,
  actions,
  actionsStyle,
  isContentScrollable,
}) {
  let Content = null;
  const Title = title ? (
    <DialogBase.Title style={[styles.title, titleStyle]}>
      {title}
    </DialogBase.Title>
  ) : null;

  if (content) {
    Content = isContentScrollable ? (
      <DialogBase.ScrollArea style={[styles.content, contentStyle]}>
        {content}
      </DialogBase.ScrollArea>
    ) : (
      <DialogBase.Content style={[styles.content, contentStyle]}>
        {content}
      </DialogBase.Content>
    );
  }

  const Actions = actions ? (
    <DialogBase.Actions style={[styles.actions, actionsStyle]}>
      {actions}
    </DialogBase.Actions>
  ) : null;

  return (
    <Portal>
      <DialogBase
        style={[styles.dialog, style]}
        visible={visible}
        onDismiss={onDismiss}
        dismissable={dismissable}
      >
        {Title}
        {Content}
        {Actions}
      </DialogBase>
    </Portal>
  );
}

Dialog.propTypes = {
  isContentScrollable: PropTypes.bool,
  visible: PropTypes.bool,
  dismissable: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.node,
  titleStyle: PropTypes.object,
  content: PropTypes.node,
  contentStyle: PropTypes.object,
  actions: PropTypes.node,
  actionsStyle: PropTypes.object,
};

Dialog.defaultProps = {
  isContentScrollable: null,
  visible: null,
  title: null,
  titleStyle: null,
  content: null,
  contentStyle: null,
  onDismiss: undefined,
  dismissable: true,
  style: null,
  actions: null,
  actionsStyle: null,
};

export default Dialog;
