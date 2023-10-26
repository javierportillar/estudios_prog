import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { PokemonItem } from '../pokemon-list/pokemon-item'

export const PokemonCard = ({search}) => {
  const [pokemonUrl, setPokemonUrl] = useState(null);

  useEffect(() => {
    if (search) {
      getPokemonUrl(search).then(url => setPokemonUrl(url));
    } else {
      setPokemonUrl(null);
    }
  }, [search]);

  const getPokemonUrl = async (search) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    return url + search;
  }

  if (!pokemonUrl) {
    return <span>No se ha buscado Pokemon</span>;
  }

  return (
    <PokemonItem pokemon={{url: pokemonUrl}} ></PokemonItem>
  )
}

PokemonCard.propTypes = {
    search: PropTypes.string.isRequired,
}

