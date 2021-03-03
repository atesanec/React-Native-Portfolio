import { StyleSheet } from 'react-native';
import { spacing, fonts, colors } from '../../../common/theme';

const {
  mvxxl, mhxl, mbl, pbm,
} = spacing.spacingStyles;

export default StyleSheet.create({
  placeholder: {
    ...mhxl,
    ...mvxxl,
  },
  placeholderImage: {
    ...mbl,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...pbm,
  },
  placeholderTitle: {
    color: colors.black,
    fontSize: fonts.size.extraLarge,
    fontFamily: fonts.family.TradeGothicNextLTProBd,
  },
  placeholderDescription: {
    fontSize: fonts.size.large,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    textAlign: 'center',
  },
});
