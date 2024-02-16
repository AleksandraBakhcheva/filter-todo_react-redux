import { NewTodo } from "./components/NewTodo";
import { Filters } from "./components/Filters";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div>
      <header>
        <h1>Filters List</h1>
      </header>
      <main>
        <NewTodo />
        <Filters />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
