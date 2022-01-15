const fs = require('fs');

const tokenValidator4 = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.length < 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};

const nameValidator4 = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length === 0) {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    });
  }
    
  if (name.length < 3) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  next();
};

const ageValidator4 = (req, res, next) => {
  const { age } = req.body;
     
  if (!age || age.length === 0) {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório' });
  }
    
  if (age < 18) {
    return res.status(400).json({
      message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const talkValidator4 = (req, res, next) => {
  const { talk } = req.body;
    
  if (!talk || !talk.watchedAt || talk.rate === undefined) { 
    res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
    
  next();   
};

const whatchedAtValidator4 = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dateRgx = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
   
  if (!dateRgx.test(watchedAt)) {
    res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
    
  next();
};

const rateValidator4 = (req, res, next) => {
  const { talk: { rate } } = req.body;
  
  if (!(Number.isInteger(rate) && rate >= 1 && rate <= 5)) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
};

const talkCreator4 = (req, res) => {
  const database = JSON.parse(fs.readFileSync('./talker.json'));

  database.push({
    id: database.length + 1,
    ...req.body,
  });

  fs.writeFileSync('./talker.json', JSON.stringify(database));

  res.status(201).json({ id: database.length, ...req.body });
};

module.exports = { 
    tokenValidator4, 
    nameValidator4,
    ageValidator4,
    talkValidator4,
    whatchedAtValidator4,
    rateValidator4,
    talkCreator4,
};
