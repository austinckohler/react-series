import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return showTodos();

  function showTodos() {
    return props.todos.map((todo) => (
      <TodoItem key={todo.id} title={todo.title} content={todo.content} />
    ));
  }
}

export default TodoList;
