import React, { Component } from 'react';
import './App.css';

const logo = require('./assets/stockx-homepage-logo-light.svg');
const shoe = require('./assets/yeezy.jpg');

class App extends Component {
  constructor(){
    super();
    this.state={
      shoes: [
        {
          type: 'shoe',
          brand: 'Adidas',
          style: 'Yeezy Boost',
          model: '350 V2 Butter',
          upcId: 11000,
          img: shoe
        },
        {
          type: 'shoe',
          brand: 'Jordan',
          style: 'Jumpman',
          model: 'Retro',
          upcId: 11001,
          img: shoe
        },
        {
          type: 'shoe',
          brand: 'Nike',
          style: 'Airforce One',
          model: 'Special forces',
          upcId: 11002,
        }
      ]
    };
  }

  manageInventory(){
    alert('Inventory action!');
  }

  renderProduct(prod, idx) {
    return (
      <div idx={idx} className="box-wrapper">
        <div className="box">
          <img src={shoe} width="150" />
        </div>
        <h3 className="product-title">{`${prod.brand} ${prod.style} ${prod.model}`}</h3>
        <button className="brandBtnReverse" onClick={() => this.manageInventory()}>
          <span className="brandTxt">Manage</span>
        </button>
      </div>
    );
  }

  render() {
    // const { brand, type, model, style, upcId } = this.state.shoes[0];
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Inventory Shelf Management</h1>
          </div>
        </header>
        <h1 className="App-title-alt">Shoes</h1>
        <div className="flex-grid">
          <div className="row">
            {this.state.shoes ? (
              this.state.shoes.map((prod, idx) => {
                return this.renderProduct(prod, idx);
              })
            ): (null)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
