import React from 'react'

export var Sumador = () => {
    let [num, setNum] = React.useState(0);

    const handleClick = () => {
        setNum(num + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>+</button>
            <p>Haz dado click {num} veces</p>
        </div>
    );
}
