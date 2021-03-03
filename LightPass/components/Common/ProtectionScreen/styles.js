import { StyleSheet } from 'react-native';
import { spacing, colors, fonts } from '../../../common/theme';

const {
  mvm,
  mbe16,
  mtl,
} = spacing.spacingStyles;

export default StyleSheet.create({
  title: {
    color: colors.black,
    fontFamily: fonts.family.TradeGothicNextLTProBd,
    fontSize: fonts.size.extraLarge,
    ...mbe16,
    ...mtl,
  },
  header: {
    color: colors.warmGrey,
    fontFamily: fonts.family.TradeGothicNextLTProBd,
    fontSize: fonts.size.medium,
    textTransform: 'uppercase',
    ...mvm,
  },
  text: {
    color: colors.warmGrey,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    fontSize: fonts.size.medium,
  },
  link: {
    color: colors.cornflowerBlue,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    fontSize: fonts.size.medium,
  },
});
