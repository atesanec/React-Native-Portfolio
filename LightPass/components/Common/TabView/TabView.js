import * as React from 'react';
import PropTypes, { object } from 'prop-types';
import { TabView as TabViewBase } from 'react-native-tab-view';

class TabView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: props.routes,
    };
  }

  onIndexChange = (index) => this.setState({ index });

  render() {
    const {
      isSwipeEnabled,
      renderScene,
      sceneContainerStyle,
      renderTabBar,
      style,
      lazy,
    } = this.props;
    const { index, routes } = this.state;

    return (
      <TabViewBase
        lazy={lazy}
        renderTabBar={renderTabBar}
        sceneContainerStyle={sceneContainerStyle}
        style={style}
        swipeEnabled={isSwipeEnabled}
        navigationState={{ index, routes }}
        renderScene={(props) => renderScene({ ...props, currentRouteKey: routes[index].key })}
        onIndexChange={this.onIndexChange}
      />
    );
  }
}

TabView.propTypes = {
  renderTabBar: PropTypes.func,
  lazy: PropTypes.bool,
  isSwipeEnabled: PropTypes.bool,
  renderScene: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(object).isRequired,
  sceneContainerStyle: PropTypes.object,
  style: PropTypes.object,
};

TabView.defaultProps = {
  lazy: null,
  renderTabBar: null,
  sceneContainerStyle: null,
  style: null,
  isSwipeEnabled: undefined,
};

export default TabView;
