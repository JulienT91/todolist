import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
function TodoList(props) {
  const tasks = props.todo.tasks;
  const title = props.todo.title;

  function addTask(newTask) {
    props.updateTodo({
      ...props.todo,
      tasks: [...tasks, newTask],
    });
  }

  function updateTask(taskUpdated) {
    let pos = tasks.findIndex((task) => task.id === taskUpdated.id);
    if (pos > -1) {
      tasks.splice(pos, 1, taskUpdated);
      props.updateTodo({
        ...props.todo,
        tasks: [...tasks],
      });
    }
  }

  function deleteTask(taskDeleted) {
    let pos = tasks.findIndex((task) => task.id === taskDeleted.id);
    if (pos > -1) {
      tasks.splice(pos, 1);
      props.updateTodo({
        ...props.todo,
        tasks: [...tasks],
      });
    }
  }
  return (
    <div className="todoList">
      <h2>{title}</h2>
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
