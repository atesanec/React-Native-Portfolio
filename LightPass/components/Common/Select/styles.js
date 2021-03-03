
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { prs, pte16 } = spacing.spacingStyles;

export default StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    ...prs,
    ...pte16,
  },

});
