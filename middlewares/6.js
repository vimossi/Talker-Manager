const { readFile, writeFile } = require('fs').promises;

const deleteTalker6 = async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await readFile('talker.json', 'utf-8'));
  const filtredTalkers = talkers.filter((t) => t.id === parseInt(id, 10));

  if (filtredTalkers === -1) return res.status(204).end();

  filtredTalkers.splice(filtredTalkers, 1);

  await writeFile('talker.json', JSON.stringify(filtredTalkers));

  return res.status(204).end();
};

module.exports = { deleteTalker6 };
