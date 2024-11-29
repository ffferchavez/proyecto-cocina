import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Proyecto Cocina</h1>
      <nav>
        <a href="#menu" className="px-4">Menu</a>
        <a href="#order" className="px-4">Order</a>
        <a href="#contact" className="px-4">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;