import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-paper';
import { View } from 'react-native';
import SvgIllustrationPlaceHolder from '@dac/light-ui-assets/lib/icons/IllustrationPlaceHolder';
import styles from './styles';
import { colors } from '../../../common/theme';

function Placeholder({ placeholderImage, description, size }) {
  return (
    <View style={styles.placeholder}>
      <View style={styles.placeholderImage}>
        {placeholderImage ? placeholderImage({
          color: colors.brownishGrey,
          size,
        }) : (
          <Icon
            color={colors.brownishGrey}
            size={size}
            source={(iconProps) => (<SvgIllustrationPlaceHolder {...iconProps} />)}
          />
        )}
      </View>
      {description({ style: styles.placeholderDescription })}
    </View>
  );
}

Placeholder.propTypes = {
  placeholderImage: PropTypes.node,
  description: PropTypes.func.isRequired,
  size: PropTypes.number,
};

Placeholder.defaultProps = {
  placeholderImage: null,
  size: 64,
};

export default Placeholder;
