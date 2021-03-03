import PropTypes from 'prop-types';
import omitNewLines from '../../../common/omitNewLines';

export default function IntlTextComponent({ children }) {
  return omitNewLines(children);
}

IntlTextComponent.propTypes = {
  children: PropTypes.string.isRequired,
};
