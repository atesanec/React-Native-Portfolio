import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxBase } from 'react-native-paper';

function Checkbox({ checked, onChange }) {
  return (
    <CheckboxBase status={checked ? 'checked' : 'unchecked'} onPress={onChange} />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
