import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

function App() {
  const [todoLists, setTodolists] = useState([
    {
      id: nanoid(),
      title: "Ma première liste",
      tasks: [
        {
          id: nanoid(),
          title: "Faire les courses",
          isDone: true,
        },
        {
          id: nanoid(),
          title: "Nourrir le chat",
          isDone: true,
        },
      ],
    },
    {
      id: nanoid(),
      title: "Ma deuxième liste",
      tasks: [
        {
          id: nanoid(),
          title: "Faire les courses",
          isDone: true,
        },
        {
          id: nanoid(),
          title: "Nourrir le chat",
          isDone: true,
        },
      ],
    },
  ]);
  function updateTodo(todoUpdated) {
    let pos = todoLists.findIndex((todo) => todo.id === todoUpdated.id);
    if (pos > -1) {
      todoLists.splice(pos, 1, todoUpdated);
      setTodolists([...todoLists]);
    }
  }
  return (
    <main>
      <h1>
        <i className="fas fa-clipboard-list"></i> TodoList
      </h1>
      {todoLists.map((todo) => (
        <TodoList key={todo.id} todo={todo} updateTodo={updateTodo} />
      ))}
    </main>
  );
}

export default App;
