import { useState } from "react";
import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form className="todo-form">
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
      <label>
        <input type="checkbox"></input>
        First todo
      </label>
      <button>Delete</button>
    </>
  );
};
export default App;
