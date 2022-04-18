import React, { useContext } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import FilterByCountryName from '../../components/FilterByCountryName/FilterByCountryName';
import Header from '../../components/Header/Header';
import CountriesContext from '../../context/CountriesContext';

function Home() {
  const { allCountries, darkMode, inputValue } = useContext(CountriesContext);

  return (
    <div className={`app-container ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <Header />
      <FilterByCountryName />
      { allCountries
      && (
      <div className="countries-container">
        { allCountries.map((country) => (
          country.name.toLowerCase().includes(inputValue.toLowerCase())
          && <CountryCard key={country.name} country={country} />)) }
      </div>
      )}
    </div>
  );
}

export default Home;
