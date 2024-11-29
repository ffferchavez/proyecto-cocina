import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';

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
      {/* Pass the menuItems to the Menu and OrderForm components */}
      <Menu menuItems={menuItems} />
      <OrderForm menuItems={menuItems} />
    </div>
  );
}

export default App;