const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
// const menuRoutes = require('./routes/menuRoutes'); // We can remove this if not using a separate file.

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// If you're not using a separate `menuRoutes` file, you can keep this simple route here.
app.get('/api/menu', (req, res) => {
  res.json([
    { id: 1, name: 'Tacos', price: 5.99 },
    { id: 2, name: 'Burrito', price: 7.99 },
    { id: 3, name: 'Quesadilla', price: 6.49 },
  ]);
});

// OrderForm endpoint
app.post('/api/order', (req, res) => {
  const { name, order } = req.body;
  console.log(`New order from ${name}: ${order}`);
  res.json({ message: 'Order received! Thank you.' });
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));