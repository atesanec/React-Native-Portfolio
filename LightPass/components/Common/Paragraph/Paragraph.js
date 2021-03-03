import React from 'react';
import { Paragraph as ParagraphBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function Paragraph({ children, style }) {
  return (
    <ParagraphBase style={style}>
      {children}
    </ParagraphBase>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any,
};

Paragraph.defaultProps = {
  children: '',
  style: null,
};

export default Paragraph;
