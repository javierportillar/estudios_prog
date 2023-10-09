import './App.css';
import { PrimerComponente } from './primerComponente';
import { Titulo } from "./components/titulo";
import { Counter } from "./components/counter";
import { Form } from "./components/form";
import { FormV2 } from "./components/formV2";
import {ItemList} from "./components/list/itemList"

function App() {
  return (
    <div className='App'>
      <ItemList></ItemList>
    </div>
  )
}

export default App
