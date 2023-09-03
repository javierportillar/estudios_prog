const express = require('express');
const {routerPokemon} = require('./routes');

const app = express();

app.use(express.json()) // app.use (use hace referencia a midd)

app.use('/pokemon',routerPokemon) 

app.listen(8000, ()=> console.log("servidor levantado"));