import { PropTypes } from 'prop-types'
import React from 'react';
import {useRef} from 'react';

export const Search = ({setSearch}) => {

    const pokemonInputRef = useRef(null);

    const handleSearch = () => {
        setSearch(pokemonInputRef.current.value);
        console.log(pokemonInputRef.current.value);
    }

  return (
    <div className='search'>
        <input type="text" placeholder='pokeName' ref={pokemonInputRef} />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

Search.propTypes={
    setSearch: PropTypes.func.isRequired
}