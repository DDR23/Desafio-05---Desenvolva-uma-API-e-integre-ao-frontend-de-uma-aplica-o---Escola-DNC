function routes(app){
  app.use('/books', require('./getBooks.js'));
  
  app.use('/books', require('./postBooks.js'));

  app.use('/books', require('./putBooks.js'));

  app.use('/books', require('./deleteBooks.js'))
}

module.exports = routes;