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
  function deleteTodo(todoDeleted) {
    let pos = todoLists.findIndex((todo) => todo.id === todoDeleted.id);
    if (pos > -1) {
      todoLists.splice(pos, 1);
      setTodolists([...todoLists]);
    }
  }
  function addList() {
    const newList = {
      id: nanoid(),
      title: "Nouvelle liste",
      tasks: [],
    };
    setTodolists([...todoLists, newList]);
  }
  return (
    <main>
      <h1>
        <i className="fas fa-clipboard-list"></i> TodoList
      </h1>
      <button onClick={addList}>Créer une nouvelle liste</button>
      {todoLists.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </main>
  );
}

export default App;
