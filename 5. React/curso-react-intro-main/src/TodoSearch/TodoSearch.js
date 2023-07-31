import './TodoSearch.css'
import React from 'react';

function TodoSearch({searchValue, setSearchValue,}){


    return(
      <input className='TodoSearch'placeholder="Buscas alguna?"
      value= {searchValue}
      onChange={(event)=>{
        const inputValue = event.target.value // Propiedad del evento que almacena el valor
        setSearchValue(inputValue)
      }}/> 
    );
  }

  export {TodoSearch}