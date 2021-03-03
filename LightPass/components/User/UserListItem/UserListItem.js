import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';

import IcDelete from '@dac/light-ui-assets/lib/icons/IcDelete';
import IcUserTypeMember from '@dac/light-ui-assets/lib/icons/IcUserTypeMember';
import IcUserTypeManager from '@dac/light-ui-assets/lib/icons/IcUserTypeManager';
import IcArrowDownGrey from '@dac/light-ui-assets/lib/icons/IcArrowDownGrey';
import { TouchableOpacity } from 'react-native-gesture-handler';
import messages from './messages';
import styles from './styles';
import Avatar from '../../Common/Avatar';
import getAvatarTextFromDisplayName from '../../../user/getAvatarTextFromDisplayName';
import ListIcon from '../../Common/ListIcon';

import Menu from '../../Common/Menu';
import MenuItem from '../../Common/MenuItem';
import ListItemRightAccessory from '../../Common/ListItemRightAccessory';
import Icon from '../../Common/Icon';
import { icons } from '../../../common/theme';
import isUserManager from '../../../user/isUserManager';
import Text from '../../Common/Text';

export default class UserListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      width: null,
    };
  }

  handleSetVisible = (value, callback) => () => this.setState({ visible: value }, callback);

  renderRightBottom = ({ color }) => {
    const { visible } = this.state;
    const {
      isCurrentUser,
      isCurrentUserManager,
      user,
    } = this.props;
    const isManager = isUserManager(user || {});

    if (!isCurrentUserManager && !isCurrentUser) return null;

    if (isCurrentUser) {
      return (
        <Text color={color}>
          <FormattedMessage {...messages.you} />
        </Text>
      );
    }

    const RightIconArrowDown = IcArrowDownGrey;
    const RightIconArrowUp = (rightIconArrowProps) => (
      <View style={styles.rotate180}>
        <IcArrowDownGrey {...rightIconArrowProps} />
      </View>
    );

    if (isCurrentUserManager && !isCurrentUser) {
      return (
        <TouchableOpacity
          style={[{ color }, styles.button]}
          onPress={this.handleSetVisible(true)}
        >
          {isManager ? (
            <Text
              color={color}
              lineHeight="extraSmall"
              style={styles.buttonLabel}
            >
              <FormattedMessage {...messages.manager} />
            </Text>
          ) : (
            <Text
              color={color}
              lineHeight="extraSmall"
              style={styles.buttonLabel}
            >
              <FormattedMessage {...messages.user} />
            </Text>
          )}
          <Icon
            size={icons.size.small}
            color={color}
            source={(rightIconProps) => (visible ? (
              <RightIconArrowUp {...rightIconProps} color={color} />
            ) : (
              <RightIconArrowDown {...rightIconProps} color={color} />
            ))}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  onLayout = (event) => {
    this.setState({ width: event.nativeEvent.layout.width });
  };

  render() {
    const { visible, width } = this.state;
    const {
      user,
      onDelete,
      onUpdateToAdmin,
      listItemStyle,
      onUpdateToUser,
    } = this.props;
    const {
      displayName,
      email,
      isEmailPrivate,
    } = user;

    const isManager = isUserManager(user || {});

    // UPDATE TO USER
    const updateToUserHandler = isManager ? onUpdateToUser : null;
    const handleUpdateToUser = this.handleSetVisible(
      false,
      updateToUserHandler,
    );

    // UPDATE TO ADMIN
    const updateToAdminHandler = !isManager ? onUpdateToAdmin : null;
    const handleUpdateToAdmin = this.handleSetVisible(
      false,
      updateToAdminHandler,
    );

    // DELETE OPTION
    const handleDelete = this.handleSetVisible(false, onDelete);
    const description = !isEmailPrivate && email ? email : null;
    const menuItemStyle = { width };

    return (
      <View style={listItemStyle}>
        <Menu
          visible={visible}
          onDismiss={this.handleSetVisible(false)}
          anchor={(
            <ListItemRightAccessory
              onLayout={this.onLayout}
              title={displayName}
              centeredTitle={false}
              description={description}
              rightBottom={this.renderRightBottom}
              left={(leftProps) => (
                <ListIcon
                  {...leftProps}
                  icon={(iconProps) => (
                    <Avatar
                      {...iconProps}
                      variant="text"
                      label={getAvatarTextFromDisplayName(displayName)?.toUpperCase()}
                    />
                  )}
                />
              )}
            />
        )}
        >
          <MenuItem
            selected={!isManager}
            icon={IcUserTypeMember}
            onPress={handleUpdateToUser}
            title={<FormattedMessage {...messages.user} />}
            style={menuItemStyle}
          />
          <MenuItem
            selected={isManager}
            icon={IcUserTypeManager}
            onPress={handleUpdateToAdmin}
            title={<FormattedMessage {...messages.manager} />}
            style={menuItemStyle}
          />
          <MenuItem
            icon={IcDelete}
            onPress={handleDelete}
            title={<FormattedMessage {...messages.delete} />}
            style={menuItemStyle}
          />
        </Menu>
      </View>
    );
  }
}

UserListItem.propTypes = {
  listItemStyle: PropTypes.object,
  user: PropTypes.object.isRequired,
  isCurrentUser: PropTypes.bool,
  isCurrentUserManager: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onUpdateToAdmin: PropTypes.func.isRequired,
  onUpdateToUser: PropTypes.func.isRequired,
};

UserListItem.defaultProps = {
  listItemStyle: null,
  isCurrentUserManager: null,
  isCurrentUser: null,
};
