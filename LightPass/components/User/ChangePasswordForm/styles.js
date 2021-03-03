
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { mvm } = spacing.spacingStyles;

export default StyleSheet.create({
  inputWrapper: {
    ...mvm,
  },
  inputPlaceholderWrapper: {
    position: 'relative',
  },
  inputPlaceholderLink: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
});
