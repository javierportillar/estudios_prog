import { useEffect, useState } from "react"

export const Colocarbar = () => {

  const [color, setColor] = useState("orange");
  const [counter, setCounter] = useState("orange");

  console.log("Render");
  useEffect(() => {
    if (color === "red") {
      alert("El color es Rojo")
    }
    console.log("Disparando Efecto");
  }, [color])

  // useEffect(() => {
  //   setCounter((newCounter)=>{newCounter+1})
  //  }, [counter])

  return (
    <div>
      <p style={{ color: color }}>{color}</p>
      <button onClick={() => { setColor("green") }}>Cambiar a Verde</button>
      <button onClick={() => { setColor("red") }}>Cambiar a Rojo</button>
      <button onClick={() => { setColor("blue") }}>Cambiar a Azul</button>
      {/* <button onClick={() => { setColor("blue") }}>Aumentar Contador</button> */}
    </div>
  )
}
