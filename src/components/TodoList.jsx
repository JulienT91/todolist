import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
function TodoList(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function updateTask(taskUpdated) {
    let pos = tasks.findIndex((task) => task.id === taskUpdated.id);
    if (pos > -1) {
      tasks.splice(pos, 1, taskUpdated);
      setTasks([...tasks]);
    }
  }

  function deleteTask(taskDeleted) {
    let pos = tasks.findIndex((task) => task.id === taskDeleted.id);
    if (pos > -1) {
      tasks.splice(pos, 1);
      setTasks([...tasks]);
    }
  }
  return (
    <div className="todoList">
      <h1>
        <i className="fas fa-clipboard-list"></i> TodoList
      </h1>
      <TodoForm addTask={addTask} />
      <TodoItems
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoList;
