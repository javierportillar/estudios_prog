import { React, useState } from 'react'

export const Form = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");

    const handleChange = (e) => {
        const dataValue = e.target.value;
        if (e.target.name === 'name') {
            setName(dataValue);
            console.log(name);
        } else {
            setLastname(dataValue)
            console.log(lastname);
        }
    }
    const handleSubmit = (e) => {
        
        console.log(name,lastname);
        e.preventDefault();
        // console.log(e);
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <form onSubmit={(e)=>handleSubmit(e,"texto")}> Sirve para mandar más parametros */}
            <h3>Formulario.</h3>
            <input name="name" placeholder='Nombre' onChange={handleChange} />
            <input name="lastName" placeholder='Apellido' onChange={handleChange} />
            <button>Enviar Formulario</button>
        </form>
    )
}
