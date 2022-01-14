const express = require('express');
const bodyParser = require('body-parser');
const { primeiroReq } = require('./middlewares/1');
const { segundoReq } = require('./middlewares/2');
const { email3, password3, login3 } = require('./middlewares/3');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  const speaker = await primeiroReq();
  res.status(200).json(speaker);
});

app.get('/talker/:id', segundoReq);

app.post('/login', email3, password3, login3);