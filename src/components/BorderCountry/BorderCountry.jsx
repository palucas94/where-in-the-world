/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountryByLetterCode } from '../../services/countriesAPI';

function BorderCountry({ code }) {
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
      <span className="border-country">{countryName}</span>
    </Link>
  );
}

export default BorderCountry;
