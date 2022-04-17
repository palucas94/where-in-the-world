/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import CountriesContext from '../../context/CountriesContext';
import BorderCountry from '../BorderCountry/BorderCountry';
import './CountryDetailedCard.css';

function CountryDetailedCard({ country }) {
  const { darkMode } = useContext(CountriesContext);

  return (
    <div className="country-container">
      <img className={`${darkMode && 'dark-border'}`} src={country.flags.png} alt={country.name} />

      <div className="country-data-wrapper">
        <div>
          <h3>{country.name}</h3>
        </div>

        <div className="country-data">
          <div className="country-main-info">
            <p>
              { 'Native name: '}
              <span>{ country.nativeName }</span>
            </p>
            <p>
              {'Population: '}
              <span>{ country.population }</span>
            </p>
            <p>
              {'Region: '}
              <span>{ country.region }</span>
            </p>
            <p>
              {'Sub Region: '}
              <span>{ country.subregion }</span>
            </p>
            <p>
              {'Capital: '}
              <span>{ country.capital }</span>
            </p>
          </div>

          <div className="country-sub-info">
            <p>
              {'Top Level Domain: '}
              <span>{country.topLevelDomain}</span>
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

        <div className="border-countries-container">
          <p>
            {'Border Countries: '}
          </p>
          <div className="border-countries-list">
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
