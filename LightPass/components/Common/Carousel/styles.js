import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../common/theme';

const { mvm, mhs } = spacing.spacingStyles;

export default StyleSheet.create({
  paginationContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    ...mvm,
  },
  paginationDotContainer: {
    marginHorizontal: 0,
  },
  paginationDot: {
    width: spacing.gutterWidth,
    height: spacing.gutterWidth,
    borderRadius: spacing.gutterWidth / 2,
    backgroundColor: colors.black,
    ...mhs,
  },
  paginationInactiveDot: {
    marginHorizontal: 0,
    backgroundColor: colors.black,
    ...mhs,
  },

});
