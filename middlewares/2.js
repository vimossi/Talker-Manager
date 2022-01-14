// Requisito 2
const fs = require('fs').promises;

async function segundoReq(req, res) {
  const talkers = await fs.readFile('./talker.json');
  const talkersFetch = JSON.parse(talkers);
  const { id } = req.params;
  const talkerIdFilter = talkersFetch.find((talker) => talker.id === Number(id));

 if (!talkerIdFilter) {
   return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
 }
  res.status(200).json(talkerIdFilter);
}

module.exports = { segundoReq };