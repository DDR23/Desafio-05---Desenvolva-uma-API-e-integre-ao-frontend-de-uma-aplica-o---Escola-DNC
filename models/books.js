const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: 'Campo obrigatório!',
      unique: true
    },
    title: {
      type: String,
      required: 'Campo obrigatório!'
    },
    pages: {
      type: Number,
      required: 'Campo obrigatório!'
    },
    isbn: {
      type: Number,
      required: 'Campo obrigatório!'
    },
    publisher: {
      type: String,
      required: 'Campo obrigatório!'
    },
    sumary: {
      type: String,
    }
  },
  { 
    timestamps: true
  }
);

const booksModel = mongoose.model('books', bookSchema);
module.exports = booksModel;