const express = require('express');
const router = express.Router();

const menuItems = [
  { id: 1, name: 'Tacos al Pastor', price: '$2.50', image: '/assets/tacos.jpg' },
  { id: 2, name: 'Quesadillas', price: '$3.00', image: '/assets/quesadilla.jpg' },
  // Add more items
];

router.get('/', (req, res) => res.json(menuItems));

module.exports = router;