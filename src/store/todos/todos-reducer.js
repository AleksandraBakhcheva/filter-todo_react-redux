import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        { todoId: Date.now(), title: action.title, done: false },
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.todoId !== action.todoId);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.todoId === action.todoId ? { ...todo, done: !todo.done } : todo
      );
    }
    default:
      return state;
  }
};
