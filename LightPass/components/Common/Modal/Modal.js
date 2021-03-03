import React from 'react';
import { Modal as ModalBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function Modal({
  dissmissable,
  onDismiss,
  visible,
  contentContainerStyle,
  wrapperStyle,
  backgroundStyle,
  children,
}) {
  return (
    <ModalBase
      dissmissable={dissmissable}
      onDismiss={onDismiss}
      visible={visible}
      contentContainerStyle={contentContainerStyle}
      wrapperStyle={wrapperStyle}
      backgroundStyle={backgroundStyle}
    >
      {children}
    </ModalBase>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  dissmissable: PropTypes.func,
  onDismiss: PropTypes.func,
  visible: PropTypes.bool,
  contentContainerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  backgroundStyle: PropTypes.any,
};

Modal.defaultProps = {
  visible: false,
  dissmissable: undefined,
  onDismiss: undefined,
  contentContainerStyle: null,
  wrapperStyle: null,
  backgroundStyle: null,
};

export default Modal;
