import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../common/theme';

const { mbl } = spacing.spacingStyles;

export default StyleSheet.create({
  avatar: {
    ...mbl,
  },
  avatarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarLabel: {
    color: colors.warmGrey,
  },
});
