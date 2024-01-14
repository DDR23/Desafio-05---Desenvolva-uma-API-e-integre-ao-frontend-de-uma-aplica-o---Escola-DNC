const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');
const path = require('path')

router.get('', async (req, res) => {
  try {
    const books = await booksModel.find({});
    res.status(200).json({ books });
  } catch (error) {
    return res.status(500).sendFile(path.join(__dirname, '..', 'public', 'error.html'));
  }
});

module.exports = router;