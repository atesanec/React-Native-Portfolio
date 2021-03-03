import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as AvatarBase } from 'react-native-paper';
import AvatarText from './AvatarText';

function Avatar({
  variant,
  source,
  icon,
  label,
  ...props
}) {
  switch (variant) {
    case 'icon':
      return <AvatarBase.Icon icon={icon} {...props} />;
    case 'text':
      return <AvatarText label={label} {...props} />;
    case 'image':
      return <AvatarBase.Image source={source} {...props} />;

    default:
      break;
  }
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(['icon', 'text', 'image']).isRequired,
  icon: PropTypes.any,
  label: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any,
  source: PropTypes.any,
  labelStyle: PropTypes.any,
};

Avatar.defaultProps = {
  icon: undefined,
  source: undefined,
  label: '',
  size: undefined,
  color: undefined,
  style: undefined,
  labelStyle: undefined,
};

export default Avatar;
