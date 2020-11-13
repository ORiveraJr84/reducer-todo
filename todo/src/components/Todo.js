import React from "react";

const Todo = ({ id, name, completed, toggleComplete }) => {
  return (
    <div
      className={completed ? "listItem complete" : "listItem"}
      onClick={() => toggleComplete(id)}
    >
      {name}
    </div>
  );
};

export default Todo;
