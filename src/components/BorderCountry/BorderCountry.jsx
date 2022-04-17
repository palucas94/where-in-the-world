/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../../context/CountriesContext';
import { getCountryByLetterCode } from '../../services/countriesAPI';

function BorderCountry({ code }) {
  const { darkMode } = useContext(CountriesContext);

  const [countryName, setcountryName] = useState('');

  useEffect(() => {
    async function findName() {
      const name = await getCountryByLetterCode(code);
      setcountryName(name);
    }
    findName();
  });

  return (
    <Link to={`/${countryName}`}>
      <div className={`border-country ${darkMode ? 'element-dark' : 'element-light'}`}>{countryName}</div>
    </Link>
  );
}

export default BorderCountry;
