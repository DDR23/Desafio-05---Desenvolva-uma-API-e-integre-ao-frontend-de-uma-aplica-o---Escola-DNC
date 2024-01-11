const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');

router.get('/:id', async (req, res) => {
  try {
    const book = await booksModel.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Livro não encontrado');
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;