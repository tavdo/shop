// src/components/ProductList/ProductList.js
import React from 'react';
import './PruductList.css';
import Product from '../Product/Product';

const products = [
  { id: 1, name: 'Product 1', price: 40, image: 'path_to_image1' },
  { id: 2, name: 'Product 2', price: 40, image: 'path_to_image2' },
  { id: 3, name: 'Product 3', price: 40, image: 'path_to_image3' },
  // Add more products as needed
];
const PropductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default PropductList