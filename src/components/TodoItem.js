export function TodoItem({ id, completed, title, toggleTodo, deleteTodo }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.completed)}
        ></input>
        {title}
      </label>
      <button onClick={(e) => deleteTodo(id)}>Delete</button>
    </li>
  );
}
