import { StyleSheet } from 'react-native';
import { colors, spacing, fonts } from '../../../common/theme';

const { mlm } = spacing.spacingStyles;

export default StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
  },
  fieldValue: {
    ...mlm,
    flex: 0.65,
  },
  fieldName: {
    flex: 0.35,
  },
  brownishText: {
    color: colors.warmGrey,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    fontSize: fonts.size.medium,
  },
});
