import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../Lista/TodoList';
import { TodoItem } from '../Lista/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Sumador } from '../Suma/sumador';

export const AppUI = ({
    todoDelete,
    todoDone,
    todosCompleted,
    todosTotal,
    searchValue,
    setSearchValue,
    findTodos
}) => {
  return (
    <>
      <TodoCounter total={todosTotal} completed={todosCompleted} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {findTodos.map((todo) => (
          <TodoItem
            onComplete={() => todoDone(todo.text)}
            onDelete={() => todoDelete(todo.text)}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <Sumador />
    </>
  );
};
