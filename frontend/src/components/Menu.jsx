import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/api/menu')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {menuItems.map((item) => (
    <div
      key={item.id}
      className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition"
    >
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-gray-700">${item.price.toFixed(2)}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default Menu;