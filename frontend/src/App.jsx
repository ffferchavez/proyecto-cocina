import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FindUs from './components/FindUs';
import Gallery from './components/Gallery';

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch the menu data from the backend
    fetch('http://localhost:5001/api/menu') // Make sure to include the correct backend URL (localhost:5001)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data); // Save the menu data to state
      })
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu menuItems={menuItems} />
      <OrderForm menuItems={menuItems} />
      <Gallery />
      <Testimonials />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;