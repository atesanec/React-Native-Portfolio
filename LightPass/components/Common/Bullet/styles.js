import { StyleSheet } from 'react-native';
import { spacing, colors } from '../../../common/theme';

const { ptl, mts, mre10 } = spacing.spacingStyles;
const { e8, xs } = spacing.spacingValues;

export default StyleSheet.create({
  bullet: {
    width: e8,
    height: e8,
    borderRadius: xs,
    backgroundColor: colors.disabledGrey,
    ...mre10,
    ...mts,
  },
  container: {
    flexDirection: 'row',
    ...ptl,
  },
  textColor: {
    color: colors.warmGrey,
  },
});
