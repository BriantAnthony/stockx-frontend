import React from 'react';

function Product(props) {
  const {prod} = props;
  return (
    <div className="box-wrapper">
      <div className="box">
        <img src={prod.img} width="150" alt={prod.model} />
      </div>
      <div>
        <h4 className="product-title">{`${prod.brand} ${prod.model} ${prod.style}`}</h4>
      </div>
      <button className="brandBtnReverse" onClick={() => props.click()}>
        <span className="brandTxt">Manage</span>
      </button>
    </div>
  );
}

export default Product;
