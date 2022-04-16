import React from 'react';
import ReactDOM from 'react-dom/client';
import CountriesProvider from './provider/CountriesProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
