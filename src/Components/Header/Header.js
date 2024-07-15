// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">EarthlyArtistry</div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/artworks">Artworks</a>
        <a href="/contact">Contact</a>
        <a href="/login">Sign In</a>
      </div>
    </header>
  );
};

export default Header;
