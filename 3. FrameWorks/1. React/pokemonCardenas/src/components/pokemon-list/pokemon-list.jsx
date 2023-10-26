import React, { useEffect, useState } from 'react'
import { Paginator } from './paginator';
import { PokemonItem } from './pokemon-item';


const getPokemonList = async (offset) => {
    const url = new URL('https://pokeapi.co/api/v2/pokemon');
    url.searchParams.set('limit', 10);
    url.searchParams.set('offset', 10 * offset);

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setLoading(true);
        getPokemonList(offset).then((data) => {
            setPokemons(data);
            setLoading(false);
            console.log(data);
        });
    }, [offset]);

    const handleOffset = (value) => {
        setOffset((prevOffset) => Math.max(prevOffset + value, 0));

    }

    return (
        <div>
            <div className='pokemon-list'>
                {loading && <div>Loading...</div>}
                {!loading && <div className='list'>
                    <div className='list'>
                    {pokemons.map((pokemon, index) => {
                        return (
                            <PokemonItem pokemon={pokemon} key={index}></PokemonItem>
                        )
                    })}
                    </div>
                </div>}
            </div>

            <Paginator offset={offset} handleOffset={handleOffset}></Paginator>
        </div>

    )
}
