
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { mvl, mbm } = spacing.spacingStyles;

export default StyleSheet.create({
  input: {
    ...mbm,
  },
  linkText: {
    textAlign: 'center',
  },
  link: {
    ...mvl,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    ...mbm,
  },
  rotateArrow: {
    transform: [{ rotate: '180deg' }],
  },
});
