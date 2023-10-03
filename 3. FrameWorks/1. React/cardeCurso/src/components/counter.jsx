//EJEMPLO DESESTRUCTURAR DATOS
// const arreglo = [1, 2, 3, 4, 5]
// const [pp1, pp2, , pp4] = arreglo
// console.log(pp1, pp2, pp4);
import './counter.css'
import { useState } from 'react'


export const Counter = () => {
    const [cont, setContador] = useState(0); //Hook de react, se llaman use y se importa


    const increment = () => {
        setContador((valorActual)=>{
            return valorActual+1;
        });
        console.log("Incremento en 1")
    }
    const decrement = () => {
        setContador((valorActual)=> valorActual-1);
        console.log("Disminuyendo en 1")
    }
    return (
        <div>
            <p>Contador: {cont}</p>
            <button className="btn-inc" onClick={increment}>Aumentar en 1</button>
            <button className="btn-dic" onClick={decrement}>Disminuir en 1</button>
        </div>
    )
}
