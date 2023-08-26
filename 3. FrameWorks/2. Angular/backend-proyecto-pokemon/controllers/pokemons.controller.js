const pokeService = require('../services/pokemons.service')

const getPokemon = async(req, res) => {
    const pokemonesAdded = pokeService.getAll();
    console.log({req,res});
    return res.json({pokemonesAdded})
}
const addPokemon = async(req, res) => {
    const pokemonesAdded = pokeService.getAll();
    console.log({req});
    return res.json({pokemonesAdded})
}

module.exports = {
    getPokemon,
    addPokemon,
}