
// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/PropductList'
import Pagination from './Components/Pagination/Pagination'; // Ensure correct path and casing
import Footer from './Components/Footer/Footer'; // Ensure correct path and casing

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = 5; // Assume 5 pages of products for demonstration

  return (
    <div className="app">
      <Header />
      <main>
        <h1>SHOP ALL / artworks</h1>
        <ProductList />
        <Pagination pages={pages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
