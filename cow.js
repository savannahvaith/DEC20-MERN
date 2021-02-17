const cows = require('cowsay');

const speak = (text) => cows.say({ "text": text });

module.exports = {"speak":speak, "text":"hello"}