const express = require("express");

const router = express.Router();

let favoritos = [];  // Este array actuará como nuestra "base de datos" en memoria

// Ruta POST para agregar un nuevo Pokémon a favoritos
router.post("/", (req, res) => {
  const data = req.body;
// const data = {nombre:'Javi'}
  console.log({data});
  favoritos.push(data);  // Almacenamos el nuevo Pokémon en el array
  res.json({
    mensaje: "creado",
    datos: data
  });
});

// Ruta GET para obtener la lista de Pokémon favoritos
router.get("/", (req, res) => {
  res.json({
    mensaje: "Lista de Pokémon favoritos",
    datos: favoritos,
  });
});

module.exports = router;