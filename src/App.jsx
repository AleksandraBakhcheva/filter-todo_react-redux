import { NewTodo } from "./components/NewTodo";
import { Filters } from "./components/Filters";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Filters List</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
