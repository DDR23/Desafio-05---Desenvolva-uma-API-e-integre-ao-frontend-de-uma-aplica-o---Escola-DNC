const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');

/**
 * @swagger
 * /books:
 *  get:
 *    description: rota "/books"
 *    responses:
 *      200:
 *        description: Sucesso
 */

router.get('/', async (req, res) => {
  try {
    const books = await booksModel.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).send(error)
  }
});

module.exports = router;