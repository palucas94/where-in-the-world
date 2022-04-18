/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import CountriesContext from '../context/CountriesContext';
import { getAllCountries } from '../services/countriesAPI';

export default function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  const inputHandler = ({ target: { value } }) => setNameFilter(value);
  const selectHandler = (({ target: { value } }) => setRegionFilter(value));

  useEffect(() => {
    async function getCountries() {
      const COUNTRIES = await getAllCountries();
      setAllCountries(COUNTRIES);
    }
    getCountries();
  }, []);

  const contextValue = {
    allCountries,
    setAllCountries,
    country,
    setCountry,
    darkMode,
    handleMode,
    nameFilter,
    inputHandler,
    regionFilter,
    selectHandler,
  };

  return (
    <CountriesContext.Provider value={contextValue}>{children}</CountriesContext.Provider>
  );
}
