import { StyleSheet } from 'react-native';
import { spacing, colors } from '../../../common/theme';

const { mhs } = spacing.spacingStyles;

export default StyleSheet.create({
  passMeter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  level: {
    flex: 1,
    ...mhs,
  },
  levelList: {
    flex: 0.85,
    flexDirection: 'row',
  },
  strong: {
    borderBottomColor: colors.pressedState,
  },
  weekMedium: {
    borderBottomColor: colors.lightOrange,
  },
  levelBorder: {
    borderBottomWidth: 2,
    borderBottomColor: colors.brownishGrey,
  },
  levelLabel: {
    flex: 0.15,
    textAlign: 'right',
  },
});
