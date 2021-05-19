import "./App.css";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

function App() {
  const tasks = [
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
    {
      id: nanoid(),
      title: "Apprendre react",
      isDone: false,
    },
    {
      id: nanoid(),
      title: "Manger des fraises",
      isDone: false,
    },
    {
      id: nanoid(),
      title: "Sortir boire une bière",
      isDone: false,
    },
  ];
  return (
    <main>
      <TodoList tasks={tasks} />
    </main>
  );
}

export default App;
