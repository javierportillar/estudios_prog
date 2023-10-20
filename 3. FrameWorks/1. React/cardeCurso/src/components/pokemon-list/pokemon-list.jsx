import React, { useEffect, useState } from 'react'

export const PokeList = () => {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=1500"
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(false);

const fetchPokemones = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

  useEffect(() => {
    setLoading(true);
    fetchPokemones()
      .then((data) => {
        setPokemones(data)
        setLoading(false);
      })
      .catch((error) => console.log(error))
    //Logica
  }, []) //Dependencias

  return (
    <div>
      {/* Si loading es true, renderiza lo de adentro */}
      {loading && <span>Cargando...</span>}
      {
        pokemones.map((pokemon) => {
          return <div key={pokemon.name}>
            <h3> Nombre: {pokemon.name}</h3>
            <span> URL: {pokemon.url}</span>
          </div>
        })
      }
    </div>
  )
}
