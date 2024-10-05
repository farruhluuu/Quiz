const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case "AddTodo":
      return {
        ...state,
        todos: [...todos, { id: Date.now(), text: payload, isChange: false }]
      };

    case "DeleteTodo":
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== payload)
      };

    default:
      return state;
  }
};
