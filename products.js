const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// List products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(200);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get product
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ error: 'Product not found' });
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create product (admin)
router.post('/', async (req, res) => {
  try {
    const prod = new Product(req.body);
    await prod.save();
    res.status(201).json(prod);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
