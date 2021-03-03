import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import DialogContainer from '../../../containers/Common/DialogContainer';

function AlertDialog({
  title,
  content,
  onDismiss,
  dissmissable,
  style,
  dialogName,
  okMessage,
  onOk,
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
        <Button variant="contained" onPress={onOk || onDismiss}>
          {okMessage}
        </Button>
      )}
    />
  );
}

AlertDialog.propTypes = {
  dialogName: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  okMessage: PropTypes.node.isRequired,
  dissmissable: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.node,
  content: PropTypes.node,
  onOk: PropTypes.func,
};

AlertDialog.defaultProps = {
  title: null,
  content: null,
  dissmissable: null,
  style: null,
  onOk: null,
};

export default AlertDialog;
