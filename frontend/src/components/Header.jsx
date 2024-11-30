import React from 'react';

const Header = () => (
  <header className="bg-gray-100 text-gray-800 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl">Proyecto Cocina</h1>
      <nav>
        <a href="#home" className="px-4">Home</a>
        <a href="#menu" className="px-4">Menu</a>
        <a href="#about" className="px-4">About Us</a>
        <a href="#gallery" className="px-4">Gallery</a>
        <a href="#findus" className="px-4">Find Us</a>
      </nav>
      <button href="#order" className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white ml-10 py-2 px-4 border border-green-500 hover:border-transparent rounded-full">Order Online</button>
    </div>
  </header>
);

export default Header;