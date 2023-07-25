import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Sumador } from './sumador';
import React from 'react';

const componentes = [{text: 'Pelar papa', completed:true },
{text: 'Sacar a Krono y Hana', completed:false },
{text: 'Jugar', completed:false },
{text: 'Comer', completed:false },
{text: 'Dormir', completed: false}]

function App() {
  const [searchValue,setSearchValue,] = React.useState('');
  const [todos,newTodos]= React.useState(componentes);

  const findTodos = todos.filter(
    (todo) =>{
      const constMin = todo.text.toLowerCase(); // Convertir a minusculas la constante componentes
      const searchText =  searchValue.toLowerCase(); // ''  '' La entrada de busqueda
      return constMin.includes(searchText) }
    )

  const todosCompleted = todos.filter(todo=>todo.completed).length;
  const todosTotal = componentes.length;
  return (
    
    <>
      <TodoCounter total={todosTotal} completed={todosCompleted}/>
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    <TodoList>
      {findTodos.map(todo=>(
      <TodoItem todos= {todos} key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList> 
    <CreateTodoButton/>
    <Sumador/>
    </>
  );
}
export default App;
