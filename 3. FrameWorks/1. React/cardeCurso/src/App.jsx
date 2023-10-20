import './App.css';
import { PrimerComponente } from './primerComponente';
import { Titulo } from "./components/titulo";
import { Counter } from "./components/counter";
import { Form } from "./components/form";
import { FormV2 } from "./components/formV2";
import {ItemList} from "./components/list/itemList"
import {Colocarbar} from './components/colocarbar/colocarbar'
import { PokeList } from "./components/pokemon-list/pokemon-list";

function App() {
  return (
    <div className='App'>
      <PokeList></PokeList>
    </div>
  )
}

export default App
