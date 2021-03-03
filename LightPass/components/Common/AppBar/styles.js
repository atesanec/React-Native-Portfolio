import { StyleSheet } from 'react-native';
import { APPBAR_HEIGHT } from '../../../common/commonConstants';
import { fonts, spacing } from '../../../common/theme';

const { phm } = spacing.spacingStyles;
export default StyleSheet.create({
  appBar: {
    height: APPBAR_HEIGHT,
    ...phm,
  },
  springPlaceholder: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.family.TradeGothicNextLTProBd,
    fontSize: fonts.size.extraLarge,
  },
  buttonSpacer: {
    width: 12,
  },
});
