export const getAllCountries = async () => {
  const ALL_COUNTRIES_URL = 'https://restcountries.com/v2/all';
  const API_RESPONSE = await fetch(ALL_COUNTRIES_URL);
  const RESULTS = await API_RESPONSE.json();

  const ALL_COUNTRIES_INFO = RESULTS.map(
    ({
      flags,
      name,
      population,
      region,
      capital,
    }) => ({
      flags,
      name,
      population,
      region,
      capital,
    }),
  );

  return ALL_COUNTRIES_INFO;
};

export const getCountry = async (countryName) => {
  const COUNTRY_URL = `https://restcountries.com/v2/name/${countryName}`;
  const API_RESPONSE = await fetch(COUNTRY_URL);
  const RESULTS = await API_RESPONSE.json();

  const COUNTRY_INFO = RESULTS.map(
    ({
      flags,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    }) => ({
      flags,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    }),
  );

  return COUNTRY_INFO;
};

export const getCountryByLetterCode = async (code) => {
  const CODE_URL = `https://restcountries.com/v2/alpha/${code}`;
  const API_RESPONSE = await fetch(CODE_URL);
  const RESULTS = await API_RESPONSE.json();

  const COUNTRY_NAME = RESULTS.name;

  return COUNTRY_NAME;
};
