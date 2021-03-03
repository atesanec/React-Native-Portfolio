import { StyleSheet } from 'react-native';
import { spacing, fonts, colors } from '../../../common/theme';

const { mbm, mvm } = spacing.spacingStyles;

export default StyleSheet.create({
  slide: {
    alignItems: 'center',
    ...mbm,
  },
  slideTitle: {
    ...mvm,
    color: colors.brownishGrey,
    fontSize: fonts.size.large,
    fontFamily: fonts.family.TextRegular,
  },
  slideImage: {
    // maxWidth: '100%',
    aspectRatio: 1,
    ...mvm,
  },
});
