import React, { useContext } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import FilterByCountryName from '../../components/FilterByCountryName/FilterByCountryName';
import FilterByRegion from '../../components/FilterByRegion/FilterByRegion';
import Header from '../../components/Header/Header';
import CountriesContext from '../../context/CountriesContext';
import './Home.css';

function Home() {
  const {
    allCountries, darkMode, nameFilter, regionFilter,
  } = useContext(CountriesContext);

  return (
    <div className={`app-container ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <Header />
      <div className="filters-container">
        <FilterByCountryName />
        <FilterByRegion />
      </div>
      { allCountries
      && (
      <div className="countries-container">
        { allCountries.map((country) => (
          country.name.toLowerCase().includes(nameFilter.toLowerCase())
          && country.region.includes(regionFilter)
          && <CountryCard key={country.name} country={country} />)) }
      </div>
      )}
    </div>
  );
}

export default Home;
