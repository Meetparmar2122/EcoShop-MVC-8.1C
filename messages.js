const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const m = new Message(req.body);
    await m.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
