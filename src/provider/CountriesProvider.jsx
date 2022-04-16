import React from 'react';
import CountriesContext from '../context/CountriesContext';

export default function CountriesProvider({ children }) {
  const contextValue = {};

  return (
    <CountriesContext.Provider value={contextValue}>{children}</CountriesContext.Provider>
  );
}
