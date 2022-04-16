/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

function CountryCard({ country }) {
  const {
    flags, name, population, region, capital,
  } = country;

  return (
    <Link to={`/${name}`}>
      <div className="country-wrapper">
        <img src={flags.png} alt={name} />
        <h3 className="country-name">{name}</h3>
        <div className="country-info">
          <h4>
            Population:
            {' '}
            {population}
          </h4>
          <h4>
            Region:
            {' '}
            {region}
          </h4>
          <h4>
            Capital:
            {' '}
            {capital}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
