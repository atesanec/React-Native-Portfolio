
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { mbm, mvl } = spacing.spacingStyles;

export default StyleSheet.create({
  inputWrapper: {
    ...mbm,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...mvl,
  },
});
