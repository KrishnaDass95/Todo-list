import { useState } from "react";

const Form = ({ addTodo }) => {
  // this is for the search field
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    // form does not refresh
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);

    
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
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
  );
};

export default Form;
