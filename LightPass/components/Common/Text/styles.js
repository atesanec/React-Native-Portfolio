import { StyleSheet } from 'react-native';
import { spacing, fonts, colors } from '../../../common/theme';

const { mtm, mve20 } = spacing.spacingStyles;

export default StyleSheet.create({
  placeholderTitle: {
    ...mve20,
  },
  placeholderDescription: {
    ...mtm,
    color: colors.brownishGrey,
    fontSize: fonts.size.large,
    fontFamily: fonts.family.TextRegular,
  },
});
