
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { mbm } = spacing.spacingStyles;

export default StyleSheet.create({
  inputs: {
    ...mbm,
  },
  inputWrapper: {
    ...mbm,
    flexDirection: 'column',
  },
  input: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    // 16pt or 12pt for small device screens
    bottom: spacing.gutterWidth * 1.5,
    right: spacing.gutterWidth,
  },
});
