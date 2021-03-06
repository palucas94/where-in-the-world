import React, { useContext } from 'react';
import CountriesContext from '../../context/CountriesContext';
import './FilterByCountryName.css';

function FilterByCountryName() {
  const { darkMode, nameFilter, inputHandler } = useContext(CountriesContext);

  return (
    <div className="filter-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={nameFilter}
        onChange={inputHandler}
        className={darkMode ? 'element-dark' : 'element-light'}
      />
    </div>
  );
}

export default FilterByCountryName;
