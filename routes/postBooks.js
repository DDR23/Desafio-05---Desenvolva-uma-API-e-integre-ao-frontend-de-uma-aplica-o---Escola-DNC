const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');

/**
 * @swagger
 * /books/create:
 *  post:
 *    description: Retorna uma mensagem para a rota POST
 *    responses:
 *      201:
 *        description: Sucesso
 */

router.post('/create', async (req, res) => {
  const book = new booksModel(req.body);
  try {
    await book.save();
    res.status(201).send(book)
  } catch (error) {
    res.status(400).send(error)
  }
});

module.exports = router;