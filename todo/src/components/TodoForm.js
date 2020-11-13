import React, { useState } from "react";

const TodoForm = ({ addNewTaskToList }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTaskToList(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newItem">
        <input
          type="text"
          value={newTaskName}
          name="newItem"
          onChange={handleChange}
        />
      </label>
      <button>add</button>
    </form>
  );
};

export default TodoForm;
