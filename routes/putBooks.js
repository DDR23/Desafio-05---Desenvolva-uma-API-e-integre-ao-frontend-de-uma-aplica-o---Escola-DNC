const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');

router.put('/update/:id', async (req, res) => {
  try {
    const book = await booksModel.findByIdAndUpdate(req.params.id, req.body, { new: true , runValidators: true });
    console.log(book)
    if(!book){
      return res.status(404).send('livro não encontrado');
    }
    res.send(book);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

module.exports = router;