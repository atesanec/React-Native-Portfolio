import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const { pvs } = spacing.spacingStyles;


export default StyleSheet.create({
  rightWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    ...pvs,
  },
  subcell: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0.5,
  },
});
