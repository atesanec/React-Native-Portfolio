import React from 'react';
import PropTypes from 'prop-types';
import SpinnerOverlay from '../SpinnerOverlay';

// eslint-disable-next-line no-unused-vars
export default function Form({ error, submitting, children }) {
  // redux-form doesn't clean the error when resubmitting
  // const finalError = submitting ? null : error;
  return (
    <>
      <SpinnerOverlay visible={submitting} />
      {children}
    </>
  );
}

Form.propTypes = {
  error: PropTypes.any,
  submitting: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

Form.defaultProps = {
  error: null,
  children: null,
};
