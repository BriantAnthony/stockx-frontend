import React, { Component } from 'react';
import Product from './product';

class ProductGrid extends Component {
  // action triggers product actions
  manageInventory(){
    alert('Inventory action!');
  }
  
  // individual product
  renderProduct(prod, idx){
    return (
      <Product prod={prod} key={idx} click={this.manageInventory}/>
    );
  }
  render(){
    return (
      <div className="flex-grid">
        <div className="row">
          {this.props.data ? (
            this.props.data.map((prod, idx) => {
              return this.renderProduct(prod, idx);
            })
          ): (null)}
        </div>
      </div>
    );
  }
}

export default ProductGrid;
