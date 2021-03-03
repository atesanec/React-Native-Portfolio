import React from 'react';
import PropTypes from 'prop-types';
import { Select as SelectBase } from 'react-native-paper';
import SvgIcArrowDownGrey from '@dac/light-ui-assets/lib/icons/IcArrowDownGrey';
import { View } from 'react-native';
import SvgIcClose from '@dac/light-ui-assets/lib/icons/IcClose';
import Chip from '../Chip';
import styles from './styles';

function Select({
  value,
  data,
  multiple,
  valueExtractor,
  labelExtractor,
  iconExtractor,
  onChangeText,
  disclosureAccessoryIcon,
  disabled,
  label,
  error,
  style,
  renderItem,
}) {
  // eslint-disable-next-line react/prop-types
  const defaultRenderItem = ({ title } = {}, onClose, index) => (
    <View key={`${index}-${title}`} style={styles.chip}>
      <Chip
        index={index}
        closeIcon={SvgIcClose}
        onClose={onClose}
        selected
      >
        {title}
      </Chip>
    </View>
  );
  return (
    <SelectBase
      arrowIcon={(props) => <SvgIcArrowDownGrey {...props} />}
      value={value}
      data={data}
      multiple={multiple}
      renderItem={renderItem || defaultRenderItem}
      valueExtractor={valueExtractor}
      labelExtractor={labelExtractor}
      iconExtractor={iconExtractor}
      onChangeText={onChangeText}
      disclosureAccessoryIcon={disclosureAccessoryIcon}
      disabled={disabled}
      label={label}
      error={error}
      style={style}
    />
  );
}

Select.propTypes = {
  value: PropTypes.any,
  data: PropTypes.arrayOf(PropTypes.any),
  multiple: PropTypes.bool,
  valueExtractor: PropTypes.func,
  labelExtractor: PropTypes.func,
  iconExtractor: PropTypes.func,
  onChangeText: PropTypes.func,
  disclosureAccessoryIcon: PropTypes.any,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.bool,
  style: PropTypes.object,
  renderItem: PropTypes.func,
};

Select.defaultProps = {
  value: undefined,
  data: [],
  multiple: undefined,
  valueExtractor: undefined,
  labelExtractor: undefined,
  iconExtractor: undefined,
  onChangeText: undefined,
  disclosureAccessoryIcon: undefined,
  disabled: undefined,
  label: undefined,
  error: undefined,
  style: undefined,
  renderItem: undefined,
};

export default Select;
