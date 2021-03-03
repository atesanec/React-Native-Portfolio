import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon, TouchableRipple } from 'react-native-paper';
import styles from './styles';
import { colors, icons } from '../../../common/theme';

function GridCell({
  style,
  disabled,
  topLeftIcon,
  topRight,
  topRightIcon,
  title,
  description,
  bottomRightIcon,
  bottomLeft,
  onPress,
}) {
  let combinedStyles = [styles.cellContainer];
  if (style) {
    combinedStyles = Array.isArray(style)
      ? [styles.cellContainer, ...style]
      : [styles.cellContainer, style];
  }
  return (
    <TouchableRipple
      disabled={disabled}
      onPress={onPress}
      style={combinedStyles}
    >
      <View style={styles.cell}>
        <View style={styles.top}>
          {topLeftIcon && (
            <Icon size={icons.size.large} source={topLeftIcon} />
          )}
          {topRight && (
          <View style={styles.right}>
            {topRight}
          </View>
          )}
          {topRightIcon && (
            <Icon size={icons.size.small} source={topRightIcon} />
          )}
        </View>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>{description}</Text>
        <View style={styles.bottom}>
          {bottomLeft && bottomLeft}
          {bottomRightIcon && (
            <View style={styles.right}>
              <View style={styles.blackCircle}>
                <View style={{ position: 'absolute' }}>
                  <Icon color={colors.white} size={icons.size.medium} source={bottomRightIcon} />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableRipple>
  );
}

GridCell.propTypes = {
  style: PropTypes.any,
  topLeftIcon: PropTypes.func,
  topRight: PropTypes.any,
  topRightIcon: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bottomRightIcon: PropTypes.any,
  bottomLeft: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

GridCell.defaultProps = {
  style: null,
  topLeftIcon: null,
  topRight: null,
  topRightIcon: null,
  bottomRightIcon: null,
  bottomLeft: null,
  disabled: false,
};

export default GridCell;
