import React, { useState } from 'react';
import './styles.css';
import logo from '../Assets/criptomonedas.png';

export default function Navbar({ brand, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return ( 
    <>
    <nav className="col-sm-12 navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <a href="https://www.coingecko.com/" className="navbar-brand">
        <img className="logo" src={logo} alt="logo" />
        {brand}
      </a>
      <div className="input-group row">
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    </>
  );
}
