import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-paper';
import { View } from 'react-native';
import SvgIllustrationPlaceHolder from '@dac/light-ui-assets/lib/icons/IllustrationPlaceHolder';
import styles from './styles';

function CentredPlaceholder({
  title,
  placeholderImage,
  description,
  size,
}) {
  return (
    <View style={styles.placeholder}>
      <View style={styles.placeholderImage}>
        {placeholderImage ? (
          placeholderImage({ size })
        ) : (
          <Icon
            size={size}
            source={(iconProps) => <SvgIllustrationPlaceHolder {...iconProps} />}
          />
        )}
      </View>
      <View style={styles.titleContainer}>
        {title({ style: styles.placeholderTitle })}
      </View>
      <View>
        {description({ style: styles.placeholderDescription })}
      </View>
    </View>
  );
}

CentredPlaceholder.propTypes = {
  title: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  placeholderImage: PropTypes.func,
  size: PropTypes.number,
};

CentredPlaceholder.defaultProps = {
  placeholderImage: null,
  size: 160,
};

export default CentredPlaceholder;
