import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { phm } = spacing.spacingStyles;

export default StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    ...phm,
  },
});
