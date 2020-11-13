export const initialAppState = {
  todoList: [
    {
      name: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      name: "Learn about redux",
      completed: false,
      id: 2,
    },
    {
      name: "Learn about redux-react",
      completed: false,
      id: 3,
    },
  ],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK_TO_LIST":
      const newTask = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        todoList: [...state.todoList, newTask],
      };
    case "TOGGLE_COMPLETE":
      /* We have the task ID so now we have to map through the list of todos to find the one that matches. If it matches change its completed status to the opposite of what it is. If it doesn't match just return the task back  */
      const listOfTasksWithChangedCompletedStatus = state.todoList.map(
        (task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }
      );
      return {
        ...state,
        todoList: listOfTasksWithChangedCompletedStatus,
      };
    case "CLEAR_COMPLETED":
      const listOfIncompleteTasks = state.todoList.filter((task) => {
        return !task.completed;
      });
      return {
        ...state,
        todoList: listOfIncompleteTasks,
      };
    default:
      return state;
  }
};
