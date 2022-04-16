/* eslint-disable react/prop-types */
import React from 'react';
import BorderCountry from '../BorderCountry/BorderCountry';
import './CountryDetailedCard.css';

function CountryDetailedCard({ country }) {
  return (
    <div className="country-container">
      <img src={country.flags.png} alt={country.name} />

      <div className="country-data-wrapper">
        <div className="country-data-name">
          <h3>{country.name}</h3>
        </div>

        <div className="country-data">
          <div className="country-main-info">
            <p>
              { 'Native name: '}
              { country.nativeName }
            </p>
            <p>
              {'Population: '}
              {country.population}
            </p>
            <p>
              {'Region: '}
              {country.region}
            </p>
            <p>
              {'Sub Region: '}
              {country.subregion}
            </p>
            <p>
              {'Capital: '}
              {country.capital}
            </p>
          </div>

          <div className="country-sub-info">
            <p>
              {'Top Level Domain: '}
              {country.topLevelDomain}
            </p>
            <p>
              {'Currencies: '}
              {country.currencies.map((currency, i) => (
                <span key={`${currency + i}`}>{currency.name}</span>
              ))}
            </p>
            <p>
              {'Languages: '}
              {country.languages.map((language, i) => (
                <span key={`${language + i}`}>{language.name}</span>
              ))}
            </p>
          </div>
        </div>

        <div className="country-borders">
          <p>
            {'Border Countries: '}
          </p>
          <div className="country-borders-list">
            {country.borders && (
              country.borders.map((border, i) => <BorderCountry key={`${border + i}`} code={border} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailedCard;
