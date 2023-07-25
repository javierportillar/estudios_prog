import './TodoCounter.css';

function TodoCounter({total,completed}){
    return(
      <h1 className='TodoCounter'>Hiciste <span>{completed}</span> de <span>{total}</span> Todos</h1>
    );
  }

  export {TodoCounter}