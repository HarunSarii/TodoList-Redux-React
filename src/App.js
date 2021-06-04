import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <div className="App">
      <h1>Clarusway Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
