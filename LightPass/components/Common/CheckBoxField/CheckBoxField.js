import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getFieldError from '../../../common/getFieldError';
import ErrorText from '../ErrorText';
import Checkbox from '../CheckBox/Checkbox';


function CheckBoxField(props) {
  const {
    input: { checked, onChange },
    ...restProps
  } = props;
  const error = getFieldError(props);

  return (
    <View>
      <Checkbox
        error={!!error}
        checked={checked}
        onChange={() => onChange(!checked)}
        {...restProps}
      />
      {error && <ErrorText errorMessage={error} />}
    </View>
  );
}

CheckBoxField.propTypes = {
  input: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.object.isRequired,

};

export default CheckBoxField;
