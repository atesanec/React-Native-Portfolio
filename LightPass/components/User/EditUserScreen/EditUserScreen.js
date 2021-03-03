import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { View } from 'react-native';
import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';

import Content from '../../Common/Content';
import Avatar from '../../Common/Avatar';
import EditUserFormContainer from '../../../containers/User/EditUserFormContainer';

import messages from './messages';
import styles from './styles';
import getAvatarTextFromDisplayName from '../../../user/getAvatarTextFromDisplayName';
import ScreenState from '../../Common/ScreenState';
import { icons } from '../../../common/theme';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import Text from '../../Common/Text';

export default class EditUserScreen extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;

    onComponentDidMount();
  }

  render() {
    const {
      user, onSubmit, userState, userError,
    } = this.props;
    const {
      email,
      displayName,
      isEmailPrivate,
      isPhonePrivate,
      phone,
    } = user;

    const avatarLabel = getAvatarTextFromDisplayName(displayName);
    const phoneNumber = phone && parsePhoneNumberFromString(phone);

    return (
      <>
        <FormattedMessage {...messages.appBar}>
          {(nodes) => (
            <AppBarContainer>
              {nodes}
            </AppBarContainer>
          )}
        </FormattedMessage>
        <KeyboardAwareScrollableContentArea
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Content>
            <ScreenState data={user} state={userState} error={userError}>
              <View style={styles.avatarWrapper}>
                <Avatar
                  labelStyle={styles.avatarLabel}
                  style={styles.avatar}
                  size={icons.size.extraLarge}
                  variant="text"
                  label={avatarLabel}
                />
                <Text>{email}</Text>
              </View>
              <EditUserFormContainer
                onSubmit={onSubmit}
                initialValues={{
                  isPhonePrivate,
                  isEmailPrivate,
                  displayName,
                  nationalNumber: phoneNumber && phoneNumber.nationalNumber,
                  countryCode: phoneNumber && `+${phoneNumber.countryCallingCode}`,
                }}
              />
            </ScreenState>
          </Content>
        </KeyboardAwareScrollableContentArea>
      </>
    );
  }
}

EditUserScreen.propTypes = {
  user: PropTypes.object,
  userState: PropTypes.string.isRequired,
  userError: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
};

EditUserScreen.defaultProps = {
  user: null,
  userError: null,
};
