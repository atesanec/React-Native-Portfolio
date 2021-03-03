import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from '../Button';
import styles from './styles';
import DialogContainer from '../../../containers/Common/DialogContainer';

function ConfirmDialog({
  title,
  content,
  onDismiss,
  dissmissable,
  style,
  cancelMessage,
  dialogName,
  okMessage,
  onCancel,
  cancelRightIcon,
  cancelLeftIcon,
  onOk,
  onCancelDisabled,
  onOkDisabled,
  okRightIcon,
  okLeftIcon,
}) {
  return (
    <DialogContainer
      dialogName={dialogName}
      style={style}
      onDismiss={onDismiss}
      dissmissable={dissmissable}
      title={title}
      content={content}
      actions={(
        <View style={styles.buttonContainer}>
          <Button
            variant="outlined"
            disabled={onCancelDisabled}
            onPress={onCancel}
            rightIcon={cancelRightIcon}
            leftIcon={cancelLeftIcon}
          >
            {cancelMessage}
          </Button>
          <Button
            variant="contained"
            disabled={onOkDisabled}
            onPress={onOk}
            rightIcon={okRightIcon}
            leftIcon={okLeftIcon}
          >
            {okMessage}
          </Button>
        </View>
      )}
    />
  );
}

ConfirmDialog.propTypes = {
  dialogName: PropTypes.string.isRequired,
  dissmissable: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.node,
  content: PropTypes.node,
  cancelMessage: PropTypes.node.isRequired,
  okMessage: PropTypes.node.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancelDisabled: PropTypes.bool,
  onOkDisabled: PropTypes.bool,
  okRightIcon: PropTypes.func,
  okLeftIcon: PropTypes.func,
  cancelRightIcon: PropTypes.func,
  cancelLeftIcon: PropTypes.func,
};

ConfirmDialog.defaultProps = {
  title: null,
  content: null,
  onDismiss: undefined,
  dissmissable: null,
  style: null,
  onCancelDisabled: null,
  onOkDisabled: null,
  okRightIcon: null,
  okLeftIcon: null,
  cancelRightIcon: null,
  cancelLeftIcon: null,
};

export default ConfirmDialog;
