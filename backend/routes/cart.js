// routes/cart.js
const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

const router = express.Router();

// Add a product to the cart
router.post('/add', async (req, res) => {
  const { productId, userId, quantity } = req.body;
  try {
    const cartItem = await Cart.create({ productId, userId, quantity });
    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all items in a user's cart
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const cartItems = await Cart.findAll({ where: { userId }, include: Product });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
