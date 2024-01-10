//DEFAULT
const express = require('express');
const app = express();
app.use(express.json());


//OPTIONAL
const path = require('path');
const cors = require('cors');
app.use(cors());


//FAVICON
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


//DOTENV
require('dotenv').config();


//SWAGGER
const setupSwagger = require('./swagger/swagger');
setupSwagger(app);
// app.get('/', (req, res) => {/* #swagger.ignore = true */ res.redirect('/doc');}); //caso seja necessário redirecionar a rota '/' para a documentação do swagger


//DATABASE
const conn = require('./database/conn');
conn();


//ROUTES
const routes = require('./routes/routes');
routes(app);


//GATEWAY
if(process.env.NODE_ENV !== 'test'){
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`servidor online na porta ${PORT}`) 
  });
}