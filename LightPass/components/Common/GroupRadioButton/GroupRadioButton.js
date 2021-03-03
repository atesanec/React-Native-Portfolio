import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from 'react-native-paper';

function GroupRadioButton({
  children,
  value,
  onValueChange,
}) {
  return (
    <RadioButton.Group
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </RadioButton.Group>
  );
}

GroupRadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default GroupRadioButton.bind(RadioButton);
