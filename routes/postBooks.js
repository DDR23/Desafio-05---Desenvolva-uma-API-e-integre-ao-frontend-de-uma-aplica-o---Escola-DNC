const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');

router.post('/create', async (req, res) => {
  const book = new booksModel(req.body);
  try {
    await book.save();
    res.status(201).send(book)
  } catch (error) {
    if (error.code === 11000){
      return res.status(409).send('Id já existente')
    }
    res.status(400).send(error)
  }
});

module.exports = router;