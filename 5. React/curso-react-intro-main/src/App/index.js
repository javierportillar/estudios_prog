import useLocalStorage from "./useLocalStorage";
import React from "react";
import { AppUI } from "./AppUI";

/*
var componentes = [{text: 'Pelar papa', completed:false },
{text: 'Sacar a Krono y Hana', completed:false },
{text: 'Jugar', completed:false },
{text: 'Comer', completed:false },
{text: 'Dormir', completed: false}]
var datos = JSON.stringify(componentes)

localStorage.setItem('V1',datos)
*/

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveTodos] = useLocalStorage("V1", []);
  const findTodos = todos.filter((todo) => {
    const constMin = todo.text.toLowerCase(); // Convertir a minusculas la constante componentes
    const searchText = searchValue.toLowerCase(); // ''  '' La entrada de busqueda
    return constMin.includes(searchText);
  });

  
  const todosCompleted = todos.filter((todo) => todo.completed).length;
  const todosTotal = todos.length;
  const todoDone = (text) => {
    const newTodos = [...todos];
    const todosIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todosIndex].completed = true;
    saveTodos(newTodos); // Guardar la copia actualizada en el almacenamiento local
  };
  const todoDelete = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos); // Guardar la copia actualizada en el almacenamiento local
  };

  
  console.log('1');

  React.useEffect(() => { //Se ejecuta cada vez que un estado se modifique cualquier estado
    console.log("Prueba de encapsulado 1"); 
  });

  React.useEffect(() => { //Se ejecuta una sola vez despues de que el dom se cargue
    console.log("Prueba de encapsulado 2");
  }, []);

  React.useEffect(() => { //Se ejecuta cada vez que se modifique el estado todosTotal
    console.log("Prueba de encapsulado 3");
  }, [todosTotal]);

  console.log('2');
  
  return (
    <AppUI
      todoDelete={todoDelete}
      todoDone={todoDone}
      todosCompleted={todosCompleted}
      todosTotal={todosTotal}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      findTodos={findTodos}
    />
  );
}
export default App;
