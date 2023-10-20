import React from 'react'

export const RefElement = () => {

    const ref = React.useRef(null);
    console.log(ref);

    const increase = () => {
        ref.current.style.color = ref.current.style.color === "red" ? "blue" : "red";
        console.log(ref.current);
        console.log(ref.current.value);
    }

    return (
        <div>
            <input type="text" ref={ref} />
            <button onClick={increase}>Enviar Input</button>
        </div>
    )
}
