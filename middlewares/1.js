// Requisito 1
const fs = require('fs').promises;

const speakerJson = './talker.json';

async function primeiroReq() {
  try {
    const speaker = await fs.readFile(speakerJson);
    return JSON.parse(speaker);
  } catch (err) {
    return [];
  }
}

module.exports = { primeiroReq };
