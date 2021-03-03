import { StyleSheet } from 'react-native';
import { spacing, colors } from '../../../common/theme';

const {
  mbm, mle8, mve20, mte8,
} = spacing.spacingStyles;

export default StyleSheet.create({
  avatar: {
    ...mve20,
  },
  avatarLabel: {
    color: colors.warmGrey,
  },
  avatarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentWrapper: {
    ...mbm,
  },
  passwordIcon: {
    ...mle8,
  },
  userName: {
    ...mte8,
    ...mbm,
  },
});
