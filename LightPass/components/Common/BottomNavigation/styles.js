import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';
import { BOTTOM_NAVIGATION_HEIGHT } from '../../../common/commonConstants';

const { gutterWidth } = spacing;

export default StyleSheet.create({
  bottomNavigation: {
    flex: 0,
    height: BOTTOM_NAVIGATION_HEIGHT,
  },
  switchIcon: {
    position: 'absolute',
    // I know that is a *h*t TEMPORARY
    top: -2,
    right: -gutterWidth,
  },
});
