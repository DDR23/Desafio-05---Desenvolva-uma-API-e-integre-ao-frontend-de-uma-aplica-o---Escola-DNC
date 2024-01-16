//DEFAULT
const express = require('express');
const app = express();
app.use(express.json());


//OPTIONAL
const cors = require('cors');
app.use(cors());


//FAVICON
const path = require('path');
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


//DOTENV
require('dotenv').config();


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