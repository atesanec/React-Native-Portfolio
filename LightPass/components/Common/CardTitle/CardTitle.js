import React from 'react';
import { Card } from 'react-native-paper';

import PropTypes from 'prop-types';

function CardTitle({
  title,
  subtitle,
  left,
  right,
}) {
  return (
    <Card.Title
      title={title}
      subtitle={subtitle}
      left={left}
      right={right}
    />
  );
}

CardTitle.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  left: PropTypes.func,
  right: PropTypes.func,
};

CardTitle.defaultProps = {
  subtitle: null,
  left: null,
  right: null,
};

export default CardTitle;
