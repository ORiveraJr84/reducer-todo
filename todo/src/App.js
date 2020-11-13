import React, { useReducer } from "react";
import { initialAppState, appReducer } from "./reducers/appReducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const addNewTaskToList = (taskName) => {
    dispatch({
      type: "ADD_NEW_TASK_TO_LIST",
      payload: taskName,
    });
  };

  const toggleComplete = (completedTaskId) => {
    console.log("clicked");
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: completedTaskId,
    });
  };

  const clearCompleted = () => {
    console.log("clear button clicked");
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <div className="app">
      <h1>This is my App 🚀</h1>
      <TodoForm state={state} addNewTaskToList={addNewTaskToList} />
      <TodoList todoList={state.todoList} toggleComplete={toggleComplete} />
      <button onClick={() => clearCompleted()}>clear complete</button>
    </div>
  );
}

export default App;
