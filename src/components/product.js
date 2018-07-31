import React from 'react';

function Product(props) {
  const {prod} = props;
  return (
    <div>
      <div className="box">
        <img src={prod.img} width="150" alt={prod.style} />
      </div>
      <div>
        <p className="product-title">{`${prod.brand} ${prod.style}`}</p>
      </div>
    </div>
  );
}

export default Product;
