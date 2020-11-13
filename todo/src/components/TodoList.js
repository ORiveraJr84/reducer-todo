import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, toggleComplete }) => {
  {
    console.log(todoList);
  }
  return todoList.map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleComplete={toggleComplete}
    />
  ));
};

export default TodoList;
