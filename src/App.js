import React, { Component } from 'react';
import Header from './components/header';
import SubHeader from './components/subHeader';
import ProductGrid from './components/productGrid';

const yeezy = require('./assets/yeezy.jpg');
const jordan = require('./assets/jordan.jpg');
const af1 = require('./assets/af1.jpeg');

class App extends Component {
  constructor(){
    super();
    this.state={
      shoes: [
        {
          type: 'shoe',
          brand: 'Adidas',
          style: '350 V2 Butter',
          model: 'Yeezy Boost',
          upcId: 11000,
          img: yeezy
        },
        {
          type: 'shoe',
          brand: 'Jordan',
          style: 'Retro Low',
          model: '5',
          upcId: 11001,
          img: jordan
        },
        {
          type: 'shoe',
          brand: 'Nike',
          style: 'High Tripe Black',
          model: 'SF Air Force 1',
          upcId: 11002,
          img: af1
        }
      ]
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(form) {
    if(true) {
      let shoes2 = this.state.shoes;
      shoes2.push(form);
      this.setState({
        shoes: [...this.state.shoes]});
    }
    
  }

  render() {
    let shoes = this.state.shoes;
    return (
      <div className="App">
        <Header/>
        <SubHeader data={shoes.length} add={this.addProduct}/>
        <ProductGrid data={shoes}/>
      </div>
    );
  }
}

export default App;
