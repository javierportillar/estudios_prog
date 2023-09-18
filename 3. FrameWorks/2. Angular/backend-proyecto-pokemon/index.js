const express = require('express');
const {routerPokemon} = require('./routes');
const routerApi = require('./controllers/pokemons.controller')
const cors = require('cors');

const app = express();

app.use(express.json()) // app.use (use hace referencia a midd)

// app.use('/pokemon',routerPokemon) // No se muy bien como se implementa
app.use(cors());

app.listen(8000, ()=> console.log("servidor levantado"));

routerApi(app);