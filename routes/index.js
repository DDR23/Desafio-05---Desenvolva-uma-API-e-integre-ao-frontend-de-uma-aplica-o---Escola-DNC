const express = require('express');
const router = express.Router();
const path = require('path');

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
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;