const express = require('express');
const bodyParser = require('body-parser');
const { primeiroReq } = require('./middlewares/1');
const { segundoReq } = require('./middlewares/2');
const { email3, password3, login3 } = require('./middlewares/3');
const { tokenValidator4, 
  nameValidator4,
  ageValidator4,
  talkValidator4,
  whatchedAtValidator4,
  rateValidator4,
  talkCreator4 } = require('./middlewares/4');
const { updateTalker } = require('./middlewares/5');

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

// 1
app.get('/talker', async (req, res) => {
  const speaker = await primeiroReq();
  res.status(200).json(speaker);
});

// 2
app.get('/talker/:id', segundoReq);

// 3
app.post('/login', email3, password3, login3);

// 4
app.post('/talker', tokenValidator4, 
nameValidator4,
ageValidator4,
talkValidator4,
whatchedAtValidator4,
rateValidator4,
talkCreator4);

// 5
app.put('/talker/:id', tokenValidator4, 
nameValidator4,
ageValidator4,
talkValidator4,
whatchedAtValidator4,
rateValidator4,
updateTalker);
