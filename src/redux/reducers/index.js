const initailState = {
  todos: [
    {
      isDone: false,
      text: "dfsfdf",
    },
  ],
};

export default function (state = initailState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todos: [
          ...state.todos,
          {
            isDone: false,
            text: action.payload,
          },
        ],
      };
    }
    case "REMOVE_TODO": {
      state.todos.splice(action.payload, 1);
      state = { todos: [...state.todos] };

      return state;
    }
    case "TOGGLE_TODO": {
      const index = action.payload;
      if (state.todos[index]) {
        state.todos[index].isDone = !state.todos[index].isDone;

        return state;
      }
    }
    default: {
      return state;
    }
  }
}
