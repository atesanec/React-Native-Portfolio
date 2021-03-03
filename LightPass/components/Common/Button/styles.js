import { StyleSheet } from 'react-native';
import { fonts } from '../../../common/theme';

export default StyleSheet.create({
  labelCommon: {
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    fontSize: fonts.size.medium,
    lineHeight: fonts.lineHeight.small,
  },
  labelContained: {
    fontFamily: fonts.family.TradeGothicNextLTProBd,
  },
});
