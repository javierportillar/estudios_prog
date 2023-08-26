const { Router } = require('express');
const { getPokemon, addPokemon } = require('./controllers/pokemons.controller');

const router = Router();

router.get('/pokemon', getPokemon)
router.post('/pokemon', addPokemon)

module.exports = { 
    routerPokemon: router 
};