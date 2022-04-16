import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetailedCard from '../../components/CountryDetailedCard/CountryDetailedCard';
import Header from '../../components/Header/Header';
import CountriesContext from '../../context/CountriesContext';
import { getCountry } from '../../services/countriesAPI';

function Country() {
  const { id } = useParams();
  const { country, setCountry } = useContext(CountriesContext);

  useEffect(() => {
    async function getCountryInfo() {
      const [info] = await getCountry(id);
      setCountry(info);
    }
    getCountryInfo();
  }, [id]);

  return (
    <div className="app-container">
      <Header />
      {country && <CountryDetailedCard country={country} />}
    </div>
  );
}

export default Country;
