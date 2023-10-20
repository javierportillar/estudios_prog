import React, { useEffect, useState } from 'react'

export const PokeList = () => {

    const url = "https://pokeapi.co/api/v2/pokemon?limit=10"
    const [pokemones,setPokemones]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then((response)=>{ return response.json()})
        .then((data)=>{console.log(data);})
        //Logica
    },[]) //Dependencias
  return (
    <div>{pokemones.length}</div>
  )
}
