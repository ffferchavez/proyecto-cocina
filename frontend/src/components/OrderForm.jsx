import React, { useState } from 'react';

function OrderForm({ menuItems }) {
  const [name, setName] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Handle item selection
  const handleItemChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };

  // Calculate total price
  const handleCalculateTotal = () => {
    let totalAmount = 0;
    selectedItems.forEach((itemId) => {
      const item = menuItems.find((menuItem) => menuItem.id === parseInt(itemId));
      totalAmount += item.price;
    });
    setTotal(totalAmount);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the order to the backend (POST request)
    fetch('http://localhost:5001/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, order: selectedItems }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => console.error('Error submitting order:', error));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Select Items</label>
          <div className="space-y-2 mt-2">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={item.name}
                  value={item.id}
                  onChange={handleItemChange}
                  className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={item.name} className="text-lg">{item.name} - ${item.price.toFixed(2)}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold">Total: ${total.toFixed(2)}</span>
          <button
            type="button"
            onClick={handleCalculateTotal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Calculate Total
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;