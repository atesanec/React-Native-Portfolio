import React from 'react';
import { KeyboardAwareScrollableContentArea as KeyboardAwareScrollableContentAreaBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function KeyboardAwareScrollableContentArea({
  children,
  style,
  extraScrollHeight,
  contentContainerStyle,
}) {
  return (
    <KeyboardAwareScrollableContentAreaBase
      style={style}
      extraScrollHeight={extraScrollHeight}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </KeyboardAwareScrollableContentAreaBase>
  );
}

KeyboardAwareScrollableContentArea.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  extraScrollHeight: PropTypes.number,
  contentContainerStyle: PropTypes.any,
};

KeyboardAwareScrollableContentArea.defaultProps = {
  style: null,
  extraScrollHeight: undefined,
  contentContainerStyle: null,
};

export default KeyboardAwareScrollableContentArea;
