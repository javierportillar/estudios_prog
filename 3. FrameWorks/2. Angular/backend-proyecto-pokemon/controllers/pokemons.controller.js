const pokeService = require("../services/pokemons.service");
const fav = require('./fav')
const express= require('express')


function routerApi(app){
  const mainRouter = express.Router();
  app.use('/v1',mainRouter);
  mainRouter.use('/favoritos',fav);
}
module.exports = routerApi;

/* Explicacion Cardenas
const getPokemon = async (req, res) => {
  // const pokemonesAdded = pokeService.getAll();
  console.log({ req, res });
  return res.json({ favorites });
};

const getFavorite = async (peticion, respuesta) => {
  console.log(peticion.params);
  const id = peticion.params.id;
  const exist = favorites.find((valor, indice) => {
    console.log(valor, indice);
    return valor === Number(id);
  });
  if(exist===undefined){
    return respuesta.json({exist:null})
  }
  return respuesta.json({ exist });
};
const addPokemon = async (req, res) => {
  // const pokemonesAdded = pokeService.getAll();
  console.log(req.body);
  favorites.push(req.body.pokeId);
  return res.json({ status: 200 });
};

module.exports = {
  getPokemon,
  addPokemon,
  getFavorite,
};

*/
