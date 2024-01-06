const express = require('express');
const router = express.Router();
const booksModel = require('../models/books');

/**
 * @swagger
 * /books/delete/:id:
 *  delete:
 *    description: Retorna uma mensagem para a rota DELETE
 *    responses:
 *      200:
 *        description: Sucesso
 */

router.delete('/delete/:id', async (req, res) => {
  try {
    const book = await booksModel.findByIdAndDelete(req.params.id);
    if(!book){
      return res.status(404).send('livro não encontrado');
    }
    res.send(book)
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;