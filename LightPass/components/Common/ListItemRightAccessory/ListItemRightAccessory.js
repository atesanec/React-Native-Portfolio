import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';
import ListIcon from '../ListIcon';
import { icons } from '../../../common/theme';

function ListItemRightAccessory({
  rightTop,
  rightBottom,
  rightAccessorySize,
  ...listProps
}) {
  return (
    <ListItem
      {...listProps}
      right={(rightProps) => (
        <ListIcon
          {...rightProps}
          size={rightAccessorySize}
          icon={(iconProps) => (
            <View style={styles.rightWrapper}>
              <View style={styles.subcell}>
                <View>
                  {rightTop && rightTop(iconProps)}
                </View>
              </View>
              <View style={styles.subcell}>
                <View>
                  {rightBottom && rightBottom(iconProps)}
                </View>
              </View>
            </View>
          )}
        />

      )}
    />
  );
}

ListItemRightAccessory.propTypes = {
  rightTop: PropTypes.func,
  rightBottom: PropTypes.func,
  rightAccessorySize: PropTypes.number,
};

ListItemRightAccessory.defaultProps = {
  rightAccessorySize: icons.size.small,
  rightTop: null,
  rightBottom: null,
};

export default ListItemRightAccessory;
