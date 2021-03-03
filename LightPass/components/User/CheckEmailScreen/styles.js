import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { mbm, mvl } = spacing.spacingStyles;

export default StyleSheet.create({
  buttonContainer: {
    ...mvl,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    ...mbm,
  },
});
