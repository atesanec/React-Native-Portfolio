import React from 'react';
import PropTypes, { object, array } from 'prop-types';
import { Chip as ChipBase } from 'react-native-paper';
import { colors } from '../../../common/theme';

function Chip({
  children,
  onPress,
  onClose,
  style,
  selected,
  disabled,
  closeIcon,
  textStyle,
}) {
  return (
    <ChipBase
      disabled={disabled}
      selectedColor={colors.cornflowerBlueTwo}
      style={style}
      onPress={onPress}
      onClose={onClose}
      selected={selected}
      closeIcon={closeIcon}
      textStyle={textStyle}
    >
      {children}
    </ChipBase>
  );
}

Chip.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  onClose: PropTypes.func,
  style: PropTypes.oneOfType([object, array]),
  textStyle: PropTypes.oneOfType([object, array]),
  disabled: PropTypes.bool,
  closeIcon: PropTypes.any,
};

Chip.defaultProps = {
  onPress: () => null,
  onClose: undefined,
  style: [],
  textStyle: [],
  disabled: false,
  closeIcon: undefined,
  selected: false,
};

export default Chip;
