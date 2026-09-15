
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  function addTodo() {
    if (todo.trim() === "") return;

    setTodolist([
      ...todolist,
      {
        id: Date.now(),
        text: todo,
        completed: false,
      },
    ]);

    setTodo("");
  }

  function toggleComplete(id) {
    setTodolist(
      todolist.map((i) =>
        i.id === id
          ? { ...i, completed: !i.completed }
          : i
      )
    );
  }
  function deleteTodo(id){
setTodolist(
  todolist.filter((i)=>
i.id!==id
  )
)
  }

  return (
    <div className="app-container">
      <h1>To-Do-List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />

        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todolist.map((i) => (
          <li
            key={i.id}
            onClick={() => toggleComplete(i.id)}
            style={{
              cursor: "pointer",
              textDecoration: i.completed ? "line-through" : "none",
              color: i.completed ? "gray" : "black",
            }}
          >
          <span>
            {i.text}
          </span>
          <button
           className="delete-btn"
           onClick={(e)=>{
            e.stopPropagation();
            deleteTodo(i.id)
           }}
           >delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

