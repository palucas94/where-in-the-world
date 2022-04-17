import React, { useContext } from 'react';
import CountriesContext from '../../context/CountriesContext';
import './Header.css';

function Header() {
  const { darkMode, handleMode } = useContext(CountriesContext);

  return (
    <div className={`header-container ${darkMode ? 'element-dark' : 'element-light'}`}>
      <h2 className="header-title">Where in the world?</h2>
      <button type="button" onClick={handleMode}>
        { darkMode
          ? <i className="fa-solid fa-moon element-dark" />
          : <i className="fa-solid fa-sun element-light" />}
      </button>
    </div>
  );
}

export default Header;
