if (process.env.NODE_ENV == 'development') {
}
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mailController = require('./controllers/mail');
// const mailRoutes = require('./routes/mail');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cache-Control, multipart/form-data , application/json ,text/plain, text/html');
  next();
});

app.post('/mail/send', mailController.sendEmail);

const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`started server on port ${ PORT }`));