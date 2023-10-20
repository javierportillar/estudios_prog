import React from 'react'

export const RefCounter = () => {
    { console.log("Rendering") }

    // const [counter, setCounter] = React.useState(0);
    // const increment = () => {
    //     console.log(counter);
    //     setCounter((acum) => { return acum + 1 });
    // }

    const counter = React.useRef(0);
    

    const increment = () => {
        console.log(counter.current);
        counter.current = counter.current + 1;
    }
    return (
        <div>
            {/* <span>{counter}</span>
            <button onClick={increment}>Click me</button> */}
            <span>{counter.current}</span>
            <button onClick={increment}>Click aquí</button>
        </div>
    )
}

