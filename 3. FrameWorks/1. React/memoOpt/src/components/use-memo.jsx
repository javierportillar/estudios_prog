import React, { useState, useMemo } from 'react'

const datos = [
    { id: 1, nombre: 'Juan', colorFavorito: 'azul' },
    { id: 99, nombre: 'Javi', colorFavorito: 'azul' },
    { id: 2, nombre: 'Ana', colorFavorito: 'verde' },
    { id: 3, nombre: 'Pedro', colorFavorito: 'rojo' },
    { id: 4, nombre: 'María', colorFavorito: 'amarillo' },
    { id: 5, nombre: 'Luis', colorFavorito: 'naranja' },
    { id: 6, nombre: 'Lucía', colorFavorito: 'rosa' },
    { id: 7, nombre: 'Carlos', colorFavorito: 'morado' },
    { id: 8, nombre: 'Sofía', colorFavorito: 'gris' },
    { id: 9, nombre: 'Jorge', colorFavorito: 'blanco' },
    { id: 10, nombre: 'Laura', colorFavorito: 'negro' }
];


// const filterBLueColor = () => {
//     console.log("Filtrando datos activandose");
//     for (let i = 0; i < 2000000000; i++) {
//         const n = (1 * 10) - 20;
//     }
//     console.log("Filtrando datos FINALIZADO");
//     return datos.filter((data) => data.colorFavorito === "azul")
// };
const filterByColor = (color) => {
    console.log("Filtrando datos activandose");
    for (let i = 0; i < 2000000000; i++) {
        const n = (1 * 10) - 20;
    }
    console.log("Filtrando datos FINALIZADO");
    return datos.filter((data) => data.colorFavorito === color)
};

export const UseMemo = () => {

    const [counter, setCounter] = useState(0);
    const [color,setColor] = useState("azul")

    const datosFiltrados = useMemo(()=>{
        return filterByColor(color)
    },[color]);
    // const datosFiltrados = useMemo(filterBLueColor,[]);

    return (
        <div>
            <div>
                <span>{counter}</span>
                <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
            </div>
                <button onClick={() => setColor("azul")}>Azul</button>
                <button onClick={() => setColor("rojo")}>Rojo</button>
                <button onClick={() => setColor("verde")}>Verde</button>
            <div> {datosFiltrados.map((data, index) => (
                <p key={index}>{data.nombre}</p>
            ))} </div>
        </div>
    )
}

