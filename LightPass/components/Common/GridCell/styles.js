import { StyleSheet } from 'react-native';
import {
  colors,
  spacing,
  fonts,
  icons,
} from '../../../common/theme';

const {
  mbs, phe8, pve16,
} = spacing.spacingStyles;
export default StyleSheet.create({
  cellContainer: {
    flex: 0.5,
    flexDirection: 'column',
    borderBottomWidth: 1,
    backgroundColor: colors.lightGray,
    borderColor: colors.veryLightPink,
    ...pve16,
  },
  cell: {
    ...phe8,
  },
  blackCircle: {
    width: icons.size.large + 12,
    height: icons.size.large + 12,
    borderRadius: icons.size.large + 12 / 2,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    ...mbs,
  },
  right: {
    marginLeft: 'auto',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    color: colors.black,
    lineHeight: 20,
  },
  description: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.TradeGothicNextLTProRegular,
    color: colors.warmGrey,
    lineHeight: 20,
  },
});
