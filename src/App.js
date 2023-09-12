import { useState } from "react";
import "./style.css";
import Form from "./components/Form";

const App = () => {
  // array that holds all the todos in an object form
  const [todos, setTodos] = useState([]);

  function addTodo(title){
    // Whenever you need values from a previous state, you need to use a function to call prev state
    // and return a new state
    setTodos((currentState) => {
      return [
        ...currentState,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }
  
  

  function toggleTodo(id, completed) {
    setTodos((currentState) => {
      return currentState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  const deleteTodo = (id) => {
    setTodos((currentState) => {
      return currentState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
    <Form addTodo={addTodo}/>
      <h1>Todos</h1>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.completed)}
              ></input>
              {todo.title}
            </label>
            <button onClick={(e) => deleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </>
  );
};
export default App;
