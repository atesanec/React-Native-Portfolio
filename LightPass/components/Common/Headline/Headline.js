import React from 'react';
import { Headline as HeadlineBase } from 'react-native-paper';
import PropTypes from 'prop-types';

function Headline({ children, style }) {
  return (
    <HeadlineBase style={style}>
      {children}
    </HeadlineBase>
  );
}

Headline.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Headline.defaultProps = {
  style: null,
};

export default Headline;
