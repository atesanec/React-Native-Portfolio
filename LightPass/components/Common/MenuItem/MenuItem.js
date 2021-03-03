import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-native-paper';
import SvgIcCheckmarkBlue from '@dac/light-ui-assets/lib/icons/IcCheckmarkBlue';
import styles from './styles';

function MenuItem({
  title,
  icon,
  disabled,
  onPress,
  selected,
  style,
  titleStyle,
}) {
  return (
    <Menu.Item
      title={title}
      icon={icon}
      checkmarkIcon={SvgIcCheckmarkBlue}
      disabled={disabled}
      onPress={onPress}
      selected={selected}
      style={style}
      titleStyle={[styles.menuItem, titleStyle]}
    />
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  style: PropTypes.any,
  titleStyle: PropTypes.any,
};

MenuItem.defaultProps = {
  style: null,
  titleStyle: null,
  icon: null,
  disabled: null,
  onPress: null,
  selected: null,
};

export default MenuItem.bind(Menu);
