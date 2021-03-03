import React from 'react';
import PropTypes, { object, array } from 'prop-types';
import { Button as ButtonBase } from 'react-native-paper';
import styles from './styles';

function Button({
  children,
  variant,
  onPress,
  style,
  disabled,
  uppercase,
  labelStyle,
  leftIcon,
  rightIcon,
}) {
  const isContained = variant === 'contained';
  const isOutlined = variant === 'outlined';
  // const isText = variant === 'text';

  const isUppercase = isContained || isOutlined;

  return (
    <ButtonBase
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      uppercase={isUppercase || uppercase}
      disabled={disabled}
      style={style}
      mode={variant}
      labelStyle={[
        styles.labelCommon,
        isContained && styles.labelContained,
        labelStyle,
      ]}
      onPress={onPress}
    >
      {children}
    </ButtonBase>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  children: PropTypes.node.isRequired,
  uppercase: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([object, array]),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  labelStyle: PropTypes.any,
};

Button.defaultProps = {
  uppercase: null,
  variant: 'text',
  onPress: () => null,
  style: [],
  disabled: false,
  leftIcon: null,
  rightIcon: null,
  labelStyle: null,
};

export default Button;
