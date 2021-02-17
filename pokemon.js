const pokemon = require('pokemon');

pokemon.all();
//=> ['Bulbasaur', …]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId('Dratini');
//=> 147

console.log(pokemon.getName(147));