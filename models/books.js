const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: 'Obrigatório!'
    },
    title: {
      type: String,
      required: 'Obrigatório!'
    },
    pages: {
      type: Number,
      required: 'Obrigatório!'
    },
    isbn: {
      type: Number,
      required: 'Obrigatório!'
    },
    publisher: {
      type: String,
      required: 'Obrigatório!'
    }
  },
  { 
    timestamps: true
  }
);

const booksModel = mongoose.model('books', bookSchema);
module.exports = booksModel;