const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

let nextId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const initalState = [];

export default function todos(state = initalState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, done: !todo.done } : todo;
      });
    default:
      return state;
  }
}
