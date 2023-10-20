import './App.css';
import { PrimerComponente } from './primerComponente';
import { Titulo } from "./components/titulo";
import { Counter } from "./components/counter";
import { Form } from "./components/form";
import { FormV2 } from "./components/formV2";
import {ItemList} from "./components/list/itemList"
import {Colocarbar} from './components/colocarbar/colocarbar'
import { PokeList } from "./components/pokemon-list/pokemon-list";
import { RefElement } from "./components/useRef/ref-element";
import { RefCounter } from "./components/useRef/ref-counter";

function App() {
  return (
    <div className='App'>
      <RefCounter></RefCounter>
      <hr />
      <RefElement></RefElement>
    </div>
  )
}

export default App
