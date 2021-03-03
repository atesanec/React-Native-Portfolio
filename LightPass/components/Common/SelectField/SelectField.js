import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Select from '../Select';
import ErrorText from '../ErrorText';
import getFieldError from '../../../common/getFieldError';

function SelectField(props) {
  const {
    input: { onChange, value },
    meta,
    multiple,
    ...restProps
  } = props;
  const error = getFieldError(props);

  return (
    <View>
      <Select
        error={!!error}
        multiple={multiple}
        value={multiple ? (value || []) : value}
        onChangeText={onChange}
        {...restProps}
      />
      {error && <ErrorText errorMessage={error} />}
    </View>
  );
}

SelectField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  multiple: PropTypes.bool,
  meta: PropTypes.object.isRequired,
};

SelectField.defaultProps = {
  multiple: false,
};

export default SelectField;
