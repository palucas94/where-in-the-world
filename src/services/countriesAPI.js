const getAllCountries = async () => {
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

export default getAllCountries;
