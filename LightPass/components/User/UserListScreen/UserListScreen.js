import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FlatList, View } from 'react-native';
import IcSearch from '@dac/light-ui-assets/lib/icons/IcSearch';
import IcArrowBackNextGrey from '@dac/light-ui-assets/lib/icons/IcArrowBackNextGrey';

import SvgIcAdd from '@dac/light-ui-assets/lib/icons/IcAdd';
import Content from '../../Common/Content';
import messages from './messages';
import ScreenState from '../../Common/ScreenState';
import SearchBar from '../../Common/SearchBar';
import styles from './styles';
import isUserManager from '../../../user/isUserManager';
import AppBar from '../../Common/AppBar';
import { KeyboardHeightConsumer } from '../../Common/KeyboardHeight';
import Link from '../../Common/Link';
import Button from '../../Common/Button';
import AppBarAction from '../../Common/AppBarAction';
import UserListItemContainer from '../../../containers/User/UserListItemContainer';
import {
  WINDOW_WITHOUT_APPBAR_HEIGHT,
  CONTENT_HEIGHT,
} from '../../../common/commonConstants';

export default class UserListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      isCollapse: true,
    };
  }

  componentDidMount() {
    const { onComponentDidMount } = this.props;

    onComponentDidMount();
  }

  handleOnChangeText = (param) => (value) => this.setState({ [param]: value });

  filterUserList = () => {
    const { userList } = this.props;
    const { search } = this.state;
    const regExp = `.*?${search}.*?`;

    if (!userList) {
      return [];
    }
    const filtered = !search
      ? userList
      : userList.filter((user) => user.displayName.match(regExp));

    filtered.sort((a, b) => {
      const aMoreThanB = a.displayName > b.displayName;
      const bMoreThanA = a.displayName < b.displayName;

      if (aMoreThanB) return 1;
      if (bMoreThanA) return -1;

      return 0;
    });

    return filtered;
  };

  handleCollapse = () => this.setState({ isCollapse: false });

  renderListItem = ({ item, index }, dataLength) => {
    const { user: currentUser } = this.props;
    const isCurrentUserManager = isUserManager(currentUser);

    return (
      <UserListItemContainer
        key={item.id}
        listItemStyle={
          dataLength - 1 === index && isCurrentUserManager
            ? styles.hack
            : null
        }
        isCurrentUser={item.id === currentUser.id}
        isCurrentUserManager={isCurrentUserManager}
        user={item}
      />
    );
  };

  render() {
    const {
      user,
      userList,
      userListState,
      userListError,
    } = this.props;
    const { search, isCollapse } = this.state;
    const isCurrentUserManager = isUserManager(user);
    const filteredUserList = this.filterUserList();

    return (
      <KeyboardHeightConsumer>
        {({ height }) => (
          <>
            {isCollapse ? (
              <FormattedMessage {...messages.appBar}>
                {(nodes) => (
                  <AppBar
                    Right={(
                      <AppBarAction
                        icon={IcSearch}
                        onPress={this.handleCollapse}
                      />
                    )}
                  >
                    {nodes}
                  </AppBar>
                )}
              </FormattedMessage>
            ) : (
              <FormattedMessage {...messages.search}>
                {(nodes) => (
                  <SearchBar
                    placeholder={nodes}
                    icon={IcArrowBackNextGrey}
                    onIconPress={() => this.setState({ isCollapse: true, search: '' })}
                    value={search}
                    onChangeText={this.handleOnChangeText('search')}
                  />
                )}
              </FormattedMessage>
            )}
            <Content>
              <ScreenState
                data={userList}
                state={userListState}
                error={userListError}
              >
                <View
                  style={{
                    height: height
                      ? WINDOW_WITHOUT_APPBAR_HEIGHT - height
                      : CONTENT_HEIGHT,
                  }}
                >
                  <FlatList
                    data={filteredUserList}
                    keyExtractor={(item, index) => item.id || index}
                    renderItem={(...args) => this.renderListItem(
                      ...args,
                      filteredUserList.length,
                    )}
                  />
                  {isCurrentUserManager && (
                    <View style={styles.fab}>
                      <FormattedMessage {...messages.inviteUser}>
                        {(nodes) => (
                          <Link
                            to="/users/create"
                            variant="contained"
                            component={Button}
                            leftIcon={SvgIcAdd}
                          >
                            {nodes}
                          </Link>
                        )}
                      </FormattedMessage>
                    </View>
                  )}
                </View>
              </ScreenState>
            </Content>
          </>
        )}
      </KeyboardHeightConsumer>
    );
  }
}

UserListScreen.propTypes = {
  user: PropTypes.object.isRequired,
  userList: PropTypes.arrayOf(PropTypes.object),
  userListState: PropTypes.string,
  userListError: PropTypes.any,
  onComponentDidMount: PropTypes.func.isRequired,
};

UserListScreen.defaultProps = {
  userList: null,
  userListState: null,
  userListError: null,
};
