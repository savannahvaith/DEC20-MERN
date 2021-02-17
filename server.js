const clock = require('clock');
const cow = require('./cow');

console.log(clock.systemClock.now());
console.log(cow.speak('moo'));
console.log(cow.text);
console.log("hey guys look i didn't have to run npm start again!!!!");