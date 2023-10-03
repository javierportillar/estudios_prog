import './App.css';
import { PrimerComponente } from './primerComponente';
import { Titulo } from "./components/titulo";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className='App'>
      <Counter></Counter>
      <Titulo tittle="El titulo" estado={true}></Titulo>
      <Titulo tittle="El titulo" estado={false}></Titulo>
    </div>
  )
}

export default App
