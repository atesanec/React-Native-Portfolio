
import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../common/theme';

const { mrm, mbe16, mlm } = spacing.spacingStyles;

export default StyleSheet.create({
  buttonContainer: {
    ...mbe16,
    ...mrm,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  rightButton: {
    ...mlm,
  },
  leftButton: {
    backgroundColor: colors.white,
  },
  rotateArrow: {
    transform: [{ rotate: '180deg' }],
  },
});
