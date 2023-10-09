import { React, useState } from 'react'

export const FormV2 = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        lastName: ""
    });


    const handleChange = (e) => {
        const { value: valueTarget, name: nameTarget } = e.target; //Se desestructura el dato del evento 
        const objNuevo = {
            ...formValues,
            [nameTarget]:valueTarget,
        }
        setFormValues(objNuevo);
        console.log(formValues);

    }
    const handleSubmit = (e) => {

        console.log(formValues);
        e.preventDefault();

    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <form onSubmit={(e)=>handleSubmit(e,"texto")}/> */}
            <h3>Formulario.</h3>
            <input name="name" placeholder='Nombre' onChange={handleChange} />
            <input name="lastName" placeholder='Apellido' onChange={handleChange} />
            <button>Enviar Formulario</button>
        </form>
    )
}
