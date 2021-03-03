import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const {
  pam,
  pts,
  pbm,
  pvm,
  ptl,
} = spacing.spacingStyles;

export default StyleSheet.create({
  dialog: {
    ...pam,
  },
  title: {
    ...pts,
    ...pbm,
  },
  content: {
    ...pvm,
    marginHorizontal: 0,
  },
  actions: {
    ...ptl,
  },
});
