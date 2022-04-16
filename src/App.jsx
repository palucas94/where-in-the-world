import React, { useContext, useEffect } from 'react';
import './App.css';
import CountryCard from './components/CountryCard/CountryCard';
import Header from './components/Header/Header';
import CountriesContext from './context/CountriesContext';
import getAllCountries from './services/countriesAPI';

function App() {
  const { allCountries, setAllCountries } = useContext(CountriesContext);

  useEffect(() => {
    async function getCountries() {
      const COUNTRIES = await getAllCountries();
      setAllCountries(COUNTRIES);
    }
    getCountries();
  }, []);

  return (
    <div className="app-container">
      <Header />

      { allCountries
      && (
      <div className="countries-container">
        { allCountries.map((country) => <CountryCard key={country.name} country={country} />) }
      </div>
      )}
    </div>
  );
}

export default App;
