import React, { useContext, useEffect } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import Header from '../../components/Header/Header';
import CountriesContext from '../../context/CountriesContext';
import { getAllCountries } from '../../services/countriesAPI';

function Home() {
  const { allCountries, setAllCountries, darkMode } = useContext(CountriesContext);

  useEffect(() => {
    async function getCountries() {
      const COUNTRIES = await getAllCountries();
      setAllCountries(COUNTRIES);
    }
    getCountries();
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'bg-dark' : 'bg-light'}`}>
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

export default Home;
