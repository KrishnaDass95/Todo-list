import { useState } from "react";
import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos((currentState) => {
      return [
        ...currentState,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  };

  function toggleTodo(id, completed){
    setTodos(currentState => {
      return currentState.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentState => {
      return currentState.filter(todo => todo.id !== id)
    })

  }

  return (
    <>
      <form onSubmit={addTodo} className="todo-form">
        <label htmlFor="todo">Enter new item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          placeholder="write here"
          id="todo"
        ></input>
        <button>Add TODO</button>
      </form>
      <h1>Todos</h1>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.completed)}
              ></input>
              {todo.title}
            </label>
            <button onClick={e => deleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </>
  );
};
export default App;
