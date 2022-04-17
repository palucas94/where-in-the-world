import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CountryDetailedCard from '../../components/CountryDetailedCard/CountryDetailedCard';
import Header from '../../components/Header/Header';
import CountriesContext from '../../context/CountriesContext';
import { getCountry } from '../../services/countriesAPI';

function Country() {
  const { id } = useParams();
  const { country, setCountry, darkMode } = useContext(CountriesContext);

  useEffect(() => {
    async function getCountryInfo() {
      const [info] = await getCountry(id);
      setCountry(info);
    }
    getCountryInfo();
  }, [id]);

  return (
    <div className={`app-container ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <Header />
      <div className="back-button-div">
        <Link to="/" className="back-button">
          <i className="fa-solid fa-arrow-left-long" />
          Back
        </Link>
      </div>
      {country && <CountryDetailedCard country={country} />}
    </div>
  );
}

export default Country;
