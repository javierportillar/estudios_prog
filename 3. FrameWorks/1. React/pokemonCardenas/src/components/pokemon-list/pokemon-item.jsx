import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'

const getPokemonList = async (url) => {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return data;
}

export const PokemonItem = ({ pokemon }) => {
    
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        setError(false);
        console.log(pokemon);
        getPokemonList(pokemon.url)
            .then((data) => {
                setPokemonData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(true);
                // console.log(error);
            });
    }, [pokemon]);

    if (error) { return <div> Pokemon wasn't found </div> }
    if (!pokemonData) { return null }

    return (
        <div>
            <p> {pokemonData.name} </p>
            {/* <p> {pokemon.url} </p> */}
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
    )
}

PokemonItem.propTypes = {
    pokemon: PropTypes.object,
}
