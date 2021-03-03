import { StyleSheet } from 'react-native';
import { spacing, fonts, colors } from '../../../common/theme';

const { mbm, mvm } = spacing.spacingStyles;

export default StyleSheet.create({
  placeholder: {
    ...mbm,
  },
  placeholderImage: {
    ...mvm,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  placeholderDescription: {
    color: colors.brownishGrey,
    fontSize: fonts.size.large,
    fontFamily: fonts.family.TextRegular,
  },
});
