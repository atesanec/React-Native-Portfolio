import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { View, ScrollView } from 'react-native';
import IcEdit from '@dac/light-ui-assets/lib/icons/IcEdit';
import IcPassword from '@dac/light-ui-assets/lib/icons/IcPassword';
import IcForward from '@dac/light-ui-assets/lib/icons/IcForward';

import Text from '../../Common/Text';
import Content from '../../Common/Content';
import messages from './messages';
import styles from './styles';
import ScreenState from '../../Common/ScreenState';
import computeMultipleStates from '../../../common/computeMultipleStates';
import { icons } from '../../../common/theme';
import Avatar from '../../Common/Avatar';
import getAvatarTextFromDisplayName from '../../../user/getAvatarTextFromDisplayName';
import Link from '../../Common/Link';
import AppBarAction from '../../Common/AppBarAction';
import Record from '../../Common/Record';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import ListIcon from '../../Common/ListIcon';
import ListItem from '../../Common/ListItem';

export default class UserDetailsScreen extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    const {
      onGoToChangePassword,
      user,
      userState,
      userError,
      currentUser,
      currentUserState,
      currentUserError,
    } = this.props;
    const {
      id,
      displayName,
      email,
      phone,
      isPhonePrivate,
      isEmailPrivate,
    } = user || {};
    const { id: currentUserId } = currentUser || {};

    const multipleState = computeMultipleStates([userState, currentUserState]);
    const avatarLabel = getAvatarTextFromDisplayName(displayName);
    const isCurrentUser = currentUserId === id;
    const error = userError || currentUserError;
    const isVisiblePhoneNumber = false;

    return (
      <>
        <FormattedMessage {...messages.appBar}>
          {(nodes) => (
            <AppBarContainer
              Right={isCurrentUser && (
                <Link
                  to="/users/current/edit"
                  style={styles.appBarEdit}
                  icon={(iconProps) => <IcEdit {...iconProps} />}
                  component={AppBarAction}
                />
              )}
            >
              {nodes}
            </AppBarContainer>
          )}
        </FormattedMessage>
        <ScrollView>
          <Content>
            <ScreenState data={user} state={multipleState} error={error}>
              <View style={styles.avatarWrapper}>
                <Avatar
                  labelStyle={styles.avatarLabel}
                  style={styles.avatar}
                  size={icons.size.extraLarge}
                  variant="text"
                  label={avatarLabel}
                />
                <Text style={styles.userName}>{displayName}</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Record fieldNameMessage={messages.email} fieldValue={email} />
                <Record
                  fieldNameMessage={messages.emailVisibility}
                  fieldValue={
                    isEmailPrivate
                      ? <FormattedMessage {...messages.nobody} />
                      : <FormattedMessage {...messages.everybody} />
                  }
                />
                {isVisiblePhoneNumber
                  && (
                    <>
                      <Record fieldNameMessage={messages.phoneNumber} fieldValue={phone} />
                      <Record
                        fieldNameMessage={messages.phoneNumberVisibility}
                        fieldValue={
                        isPhonePrivate
                          ? <FormattedMessage {...messages.nobody} />
                          : <FormattedMessage {...messages.everybody} />
                      }
                      />
                    </>
                  )}
              </View>
              {isCurrentUser && (
                <ListItem
                  variant="secondary"
                  title={<FormattedMessage {...messages.password} />}
                  description="********"
                  onPress={onGoToChangePassword}
                  left={(leftProps) => (
                    <ListIcon
                      {...leftProps}
                      style={[leftProps.style, styles.passwordIcon]}
                      size={icons.size.large}
                      icon={(iconProps) => (
                        <IcPassword {...iconProps} />
                      )}
                    />
                  )}
                  right={(rightProps) => (
                    <ListIcon
                      {...rightProps}
                      icon={(iconProps) => (
                        <IcForward {...iconProps} />
                      )}
                    />
                  )}
                />
              )}
            </ScreenState>
          </Content>
        </ScrollView>
      </>
    );
  }
}

UserDetailsScreen.propTypes = {
  onGoToChangePassword: PropTypes.func.isRequired,
  user: PropTypes.object,
  userState: PropTypes.string,
  userError: PropTypes.any,
  currentUser: PropTypes.object,
  currentUserState: PropTypes.string,
  currentUserError: PropTypes.any,
  onComponentDidMount: PropTypes.func.isRequired,
};

UserDetailsScreen.defaultProps = {
  user: null,
  userState: null,
  userError: null,
  currentUser: null,
  currentUserState: null,
  currentUserError: null,
};
