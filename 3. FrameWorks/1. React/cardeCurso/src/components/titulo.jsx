import React from 'react'
import './titulo.css'

// propiedades
export const Titulo = (props) => {
  //Logica
  console.log(props);
  const {tittle,estado}=props;
  console.log(tittle,estado);
  //return -> contenido
  return (
    <h1 className='tittle-1'>{estado ? tittle : "Texto por defecto"}</h1>
  )
}
