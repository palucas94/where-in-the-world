import React, { useContext } from 'react';
import CountriesContext from '../../context/CountriesContext';
import './FilterByRegion.css';

function FilterByRegion() {
  const { darkMode, selectHandler } = useContext(CountriesContext);

  return (
    <div className="region-filter-container ">
      <select defaultValue="DEFAULT" className={darkMode ? 'element-dark' : 'element-light'} onChange={selectHandler}>
        <option value="DEFAULT" disabled hidden>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="">All</option>
      </select>
    </div>
  );
}

export default FilterByRegion;
