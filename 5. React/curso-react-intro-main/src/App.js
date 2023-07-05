import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateButt } from './CreateButt';
import React from 'react';

const componentes = [{text: 'Pelar papa', completed:false },
{text: 'Sacar a Krono y Hana', completed:true },
{text: 'Jugar', completed:false },
{text: 'Comer', completed:true },]


function App() {
  return (
    <>
      <TodoCounter total={5} complete={4}/>
      <TodoSearch/>
    <TodoList>
      {componentes.map(todo=>(
      <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>
    <CreateButt/> 
    </>
  );
}



export default App;
