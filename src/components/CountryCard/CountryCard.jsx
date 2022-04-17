/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../../context/CountriesContext';
import './CountryCard.css';

function CountryCard({ country }) {
  const { darkMode } = useContext(CountriesContext);

  const {
    flags, name, population, region, capital,
  } = country;

  return (
    <Link to={`/${name}`}>
      <div className={`country-wrapper ${darkMode ? 'element-dark' : 'element-light'}`}>
        <img src={flags.png} alt={name} />
        <h3 className="country-name">{name}</h3>
        <div className="country-info">
          <h4>
            {'Population: '}
            <span>{population}</span>
          </h4>
          <h4>
            {'Region: '}
            <span>{region}</span>
          </h4>
          <h4>
            {'Capital: '}
            <span>{capital}</span>
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
