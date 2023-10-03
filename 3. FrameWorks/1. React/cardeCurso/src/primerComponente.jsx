import React from 'react'

const PrimerComponente = (props) => {
    const { text } = props;
    console.log(props);
    return (
        <div>
            <h1>primerComponente</h1>
            <p>{text}</p>
        </div>
    )
}
export { PrimerComponente }

// export function PrimerComponente2(){
//     return(
//         <div>Componente2</div>
//     )
// }