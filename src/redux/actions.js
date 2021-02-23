export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: text,
  };
};

export const removeTodo = (index) => {
  return {
    type: "REMOVE_TODO",
    payload: index,
  };
};

export const toggleTodo = (index) => {
  return {
    type: "TOGGLE_TODO",
    payload: index,
  };
};
