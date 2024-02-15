import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTodos } from "../store/todos/todos-selectors";
import { useParams } from "react-router-dom";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  return (
    <>
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch(toggleTodo(todo.todoId))}
              />
              <p className={todo.done === true ? "done" : ""}>{todo.title}</p>
              <button onClick={() => dispatch(removeTodo(todo.todoId))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
