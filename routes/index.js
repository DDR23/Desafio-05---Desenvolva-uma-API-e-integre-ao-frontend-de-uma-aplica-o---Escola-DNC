const express = require('express');
const router = express.Router();
const fs = require('fs');

/**
 * @swagger
 * /:
 *  get:
 *    description: rota "/"
 *    responses:
 *      200:
 *        description: Sucesso
 */

router.get('/', (req, res) => {
  try {
    const index = fs.readFileSync('public/index.html', 'utf8');
    res.send(index);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;