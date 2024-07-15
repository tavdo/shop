// src/components/Product.js
import React from 'react';



const Product = ({ name, price, image }) => {
  return (
    <>
      <img src={image} alt={name} />
      <div className="name">{name}</div>
      <div className="price">${price.toFixed(2)}</div>
      <button className="cart-icon">Add to Cart</button>
      </>
  );
};

export default Product
