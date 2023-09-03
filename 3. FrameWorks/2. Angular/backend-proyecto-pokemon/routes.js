const { Router } = require('express');
const { getPokemon, addPokemon, getFavorite } = require('./controllers/pokemons.controller');

const router = Router();

// router.get('/pokemon', (rec,res)=>{
//     return res.json({
//         a:1
//     });
// })
router.get('/pokemon/favorites/:id', getFavorite)
router.get('/pokemon', getPokemon)
router.post('/pokemon', addPokemon)

module.exports = { 
    routerPokemon: router 
};