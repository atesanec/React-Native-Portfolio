import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { BottomNavigation as BottomNavigationPaper } from 'react-native-paper';
import SvgIcSwitch from '@dac/light-ui-assets/lib/icons/IcSwitch';
import tabs, { switchWorkspaceKey, doorsPath, moreKey } from './tabs';
import SwitchWorkspaceTabContainer from '../../../containers/Workspace/SwitchWorkspaceTabContainer';
import { DefaultReactNativePaperTheme, icons } from '../../../common/theme';
import styles from './styles';
import mapWorkspaceType from '../../../workspace/mapWorkspaceType';
import Icon from '../Icon';

export default class BottomNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.tabs = tabs;
    this.state = {
      isWorkspaceSelectorVisible: false,
    };
  }

  handleTabPress = ({ route }) => {
    if (route.key === switchWorkspaceKey) {
      this.setState({ isWorkspaceSelectorVisible: true });
    }
  };

  handleIndexChange = (tabIndex) => {
    const { isWorkspaceSelectorVisible } = this.state;
    const pressedTab = this.tabs[tabIndex];

    const { onTabChange } = this.props;
    if (pressedTab.pathname !== '/workspaces/current') {
      if (isWorkspaceSelectorVisible) {
        this.setState({ isWorkspaceSelectorVisible: false });
      }
      onTabChange(pressedTab);
    }
  };

  handleHideWorkspaceSelector = () => {
    this.setState({ isWorkspaceSelectorVisible: false });
  };

  getRoutes = () => {
    const { workspace } = this.props;

    let FullWorkspaceIcon;
    if (workspace) {
      const currentWorkspaceMapping = mapWorkspaceType.find(
        (el) => el.value === workspace.usageType,
      );
      const WorkspaceIcon = currentWorkspaceMapping.icon;

      FullWorkspaceIcon = (iconProps) => (
        <View>
          <WorkspaceIcon {...iconProps} />
          <View style={styles.switchIcon}>
            <Icon {...iconProps} style size={icons.size.small} source={SvgIcSwitch} />
          </View>
        </View>
      );
    }

    const routes = this.tabs.map((item) => {
      const WorkspaceIcon = item.key === switchWorkspaceKey && workspace
        ? FullWorkspaceIcon
        : item.icon;

      return {
        key: item.key,
        icon: WorkspaceIcon,
      };
    });

    return routes;
  };

  getActiveTabIndex = () => {
    const { tab } = this.props;
    const { isWorkspaceSelectorVisible } = this.state;
    const activeTabIndex = this.tabs.findIndex((t) => {
      const tabPathName = tab.pathname;
      const isAtActivePathnameList = t.activePathnameList.includes(tabPathName);

      if (isAtActivePathnameList) return true;

      // CHECK IF pathname is equel '/doors/:id'. RegExp is a very slow and we want excape it.
      const isDoorsPath = tabPathName.slice(0, doorsPath.length) === doorsPath;

      if (isDoorsPath) {
        const isNotIncludesSlashes = !tabPathName.slice(doorsPath.length + 1).includes('/');

        if (isNotIncludesSlashes && t.key === moreKey) return true;
      }

      return false;
    });

    return !isWorkspaceSelectorVisible
      ? activeTabIndex
      : this.tabs.findIndex((t) => t.key === switchWorkspaceKey);
  };

  render() {
    const { user, workspace } = this.props;
    const { isWorkspaceSelectorVisible } = this.state;
    const routes = this.getRoutes();
    const activeTabIndex = this.getActiveTabIndex();

    return workspace && user ? (
      <>
        <BottomNavigationPaper
          onIndexChange={this.handleIndexChange}
          navigationState={{ index: activeTabIndex, routes }}
          onTabPress={this.handleTabPress}
          shifting={false}
          labeled={false}
          sceneAnimationEnabled={false}
          activeColor={DefaultReactNativePaperTheme.colors.active}
          inactiveColor={DefaultReactNativePaperTheme.colors.text}
          style={styles.bottomNavigation}
        />
        <SwitchWorkspaceTabContainer
          currentWorkspace={workspace}
          visible={isWorkspaceSelectorVisible}
          onDismiss={this.handleHideWorkspaceSelector}
        />
      </>
    ) : null;
  }
}

BottomNavigation.propTypes = {
  tab: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
  user: PropTypes.object,
  workspace: PropTypes.object,
};

BottomNavigation.defaultProps = {
  user: null,
  workspace: null,
};
