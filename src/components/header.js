import React from 'react';
const logo = require('../assets/stockx-homepage-logo-light.svg');

function Header() {
  return (
    <header className="App-header">
      <div className="App-header-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Inventory Shelf Management</h1>
      </div>
    </header>
  );
}

export default Header;
