import { StyleSheet } from 'react-native';
import { fonts } from '../../../common/theme';

export default StyleSheet.create({
  title: {
    lineHeight: fonts.lineHeight.large,
    fontSize: fonts.size.large,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
  },
  description: {
    lineHeight: fonts.lineHeight.medium,
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
  },
});
