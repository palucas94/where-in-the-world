/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import CountriesContext from '../context/CountriesContext';
import { getAllCountries } from '../services/countriesAPI';

export default function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  const inputHandler = async ({ target: { value } }) => setInputValue(value);

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
    inputValue,
    inputHandler,
  };

  return (
    <CountriesContext.Provider value={contextValue}>{children}</CountriesContext.Provider>
  );
}
