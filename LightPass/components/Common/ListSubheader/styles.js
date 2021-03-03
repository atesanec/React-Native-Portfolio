import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { pbm } = spacing.spacingStyles;

export default StyleSheet.create({
  subheader: {
    paddingVertical: 0,
    ...pbm,
    textTransform: 'uppercase',
  },
});
