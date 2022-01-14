// Requisito 3
const token = require('../utils/token');

const email3 = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'O "email" deve ter o formato "email@email.com"' });
  }
   next();
};

const password3 = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length === 0) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

const login3 = (req, res) => {
  res.status(200).json({ token: token() });
};

module.exports = { email3, password3, login3 };
