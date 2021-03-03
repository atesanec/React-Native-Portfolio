import React from 'react';
import { TabBar as TabBarBase } from 'react-native-tab-view';
import PropTypes from 'prop-types';

function TabBar({
  indicatorStyle,
  indicatorContainerStyle,
  labelStyle,
  contentContainerStyle,
  style,
  ...props
}) {
  return (
    <TabBarBase
      {...props}
      indicatorStyle={indicatorStyle}
      indicatorContainerStyle={indicatorContainerStyle}
      labelStyle={labelStyle}
      contentContainerStyle={contentContainerStyle}
      style={style}
    />
  );
}

TabBar.propTypes = {
  indicatorStyle: PropTypes.object,
  indicatorContainerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  contentContainerStyle: PropTypes.object,
  style: PropTypes.object,
};

TabBar.defaultProps = {
  indicatorStyle: null,
  indicatorContainerStyle: null,
  labelStyle: null,
  contentContainerStyle: null,
  style: null,
};

export default TabBar;
