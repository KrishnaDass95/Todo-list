import { useState } from "react";
import "./style.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

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
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      
    </>
  );
};
export default App;
