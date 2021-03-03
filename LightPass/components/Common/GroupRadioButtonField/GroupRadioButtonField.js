import React from 'react';
import PropTypes from 'prop-types';
import getFieldError from '../../../common/getFieldError';
import ErrorText from '../ErrorText';
import GroupRadioButton from '../GroupRadioButton/GroupRadioButton';

function GroupRadioButtonField(props) {
  const {
    input: { value, onChange },
    children,
    ...restProps
  } = props;
  const error = getFieldError(props);

  return (
    <>
      <GroupRadioButton
        value={value}
        onValueChange={onChange}
        {...restProps}
      >
        {children}
      </GroupRadioButton>
      {error && <ErrorText errorMessage={error} />}
    </>
  );
}

GroupRadioButtonField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  meta: PropTypes.object.isRequired,

};

export default GroupRadioButtonField;
