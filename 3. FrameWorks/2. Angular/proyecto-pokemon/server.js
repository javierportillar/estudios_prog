const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // <-- Importa cors
const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:4200'
  }));
// Lista de Pokémon favoritos (en un entorno real, usarías una base de datos)
const favoritos = [];

// Ruta POST para agregar un Pokémon a favoritos
app.post('/favoritos', (req, res) => {
  const pokemon = req.body;
  favoritos.push(pokemon);
  res.json({ message: 'Pokémon agregado a favoritos', data: pokemon });
});

// Ruta PATCH para actualizar la información de un Pokémon
app.patch('/favoritos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const pokemonActualizado = req.body;

  const index = favoritos.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Pokémon no encontrado' });
  }

  favoritos[index] = pokemonActualizado;
  res.json({ message: 'Información del Pokémon actualizada', data: pokemonActualizado });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
