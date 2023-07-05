import './TodoCounter.css';

function TodoCounter({total,complete}){
    return(
      <h1>Hiciste {complete} de {total} Todos</h1>
    );
  }

  export {TodoCounter}