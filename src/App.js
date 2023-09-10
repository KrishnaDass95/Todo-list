import { useState } from "react";
import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();

    setTodos(currentState => {
      return [
        ...currentState, {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
    setNewItem("");
  }

  return (
    <>
      <form onSubmit={addTodo} className="todo-form">
        <label htmlFor="todo">Enter new item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          placeholder="write here"
          id="todo"
        ></input>
        <button>Add TODO</button>
      </form>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
          <label>
        <input type="checkbox"
        checked={todo.completed}
        ></input>
        {todo.title}
      </label>
      <button>Delete</button>
      </div>
        )
      })}
    </>
  );
};
export default App;
