
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
    ...mvl,
  },
  checkboxContainer: {
    marginLeft: -14, // maybe TEMPORARY
  },
  checkboxTitle: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
