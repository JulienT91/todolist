import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";
import StorageService from "./services/StorageService";

function App() {
  const [todoLists, setTodolists] = useState([]);

  useEffect(() => {
    console.log("Chargement des données depuis le localstorage");
    const data = StorageService.getTodoLists();
    setTodolists(data);
  }, []);

  useEffect(() => {
    console.log("CHANGEMENT DETECTE ! Sauvegarde en localStorage");
    StorageService.saveTodoLists(todoLists);
  }, [todoLists]);

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
