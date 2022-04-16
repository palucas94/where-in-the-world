/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import CountriesContext from '../context/CountriesContext';

export default function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);

  const contextValue = {
    allCountries,
    setAllCountries,
  };

  return (
    <CountriesContext.Provider value={contextValue}>{children}</CountriesContext.Provider>
  );
}
