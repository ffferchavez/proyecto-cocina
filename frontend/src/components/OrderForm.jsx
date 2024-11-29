import { useState } from 'react';

function OrderForm() {
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, order }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => console.error('Error submitting order:', err));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Place Your Order</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Order
        </button>
      </form>
      {response && <p className="mt-4 text-green-500">{response.message}</p>}
    </div>
  );
}

export default OrderForm;