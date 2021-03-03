import React from 'react';
import PropTypes from 'prop-types';
import LocalStoreContext from './LocalStoreContext';
import storeService from '../../../common/storeService';

export default function LocalStoreProvider({
  children,
  baseUrls,
  currentBaseUrl,
}) {
  const value = {
    baseUrls,
    storeService,
    currentBaseUrl,
    currentStore: storeService.getStoreByBaseUrl(currentBaseUrl),
  };

  return (
    <LocalStoreContext.Provider value={value}>
      {children}
    </LocalStoreContext.Provider>
  );
}

LocalStoreProvider.propTypes = {
  baseUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentBaseUrl: PropTypes.string,
  children: PropTypes.element.isRequired,
};

LocalStoreProvider.defaultProps = {
  currentBaseUrl: null,
};
