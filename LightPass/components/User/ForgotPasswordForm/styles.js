
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { mbm } = spacing.spacingStyles;

export default StyleSheet.create({
  input: {
    ...mbm,
  },
  workspaceInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rotateArrow: {
    transform: [{ rotate: '180deg' }],
  },
});
