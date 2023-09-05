import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Table from './Components/Table/Table';

function App() {
  const [coin, setCoin] = useState([]);
  const [filteredCoin, setFilteredCoin] = useState([]);
  const URI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';

  const getCoins = (URI) => {
    fetch(URI)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        setFilteredCoin(data); 
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCoins(URI);
  }, []);

  // Función de búsqueda que filtra las monedas según la palabra clave
  const searchCoins = (searchTerm) => {
    const filtered = coin.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoin(filtered);
  };

  return (
    <>
      <Navbar brand="Criptomonedas" onSearch={searchCoins} />
      <Table coin={filteredCoin} />
    </>
  );
}

export default App;
