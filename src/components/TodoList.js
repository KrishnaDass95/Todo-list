
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return <ul>
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
    </ul>
}

export default TodoList;