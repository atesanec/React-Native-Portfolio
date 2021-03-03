import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import TextInput from '../TextInput';
import getFieldError from '../../../common/getFieldError';
import ErrorText from '../ErrorText';

class TextInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // redux-form doesn't immediately update the value, so we have to use internal state
      // to update it faster, otherwise the child component reverts the value
      value: props.input.value,
    };
  }

  static getDerivedStateFromProps({ input: { value } }, prevState) {
    const { value: oldValue } = prevState;

    if (value !== oldValue) {
      return { value };
    }
    return null;
  }

  // eslint-disable-next-line react/destructuring-assignment
  handleChangeText = (value) => this.setState({ value }, () => this.props.input.onChange(value));

  render() {
    const {
      input: { onBlur },
      meta,
      ...restProps
    } = this.props;
    const { value } = this.state;
    const error = getFieldError(this.props);

    return (
      <View>
        <TextInput
          error={!!error}
          value={value}
          onChangeText={this.handleChangeText}
          onBlur={() => onBlur(value)}
          {...restProps}
        />
        {error && <ErrorText errorMessage={error} />}
      </View>
    );
  }
}

TextInputField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.object.isRequired,
};

export default TextInputField;
