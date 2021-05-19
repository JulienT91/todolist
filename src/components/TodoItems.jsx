import TodoItem from "./TodoItem";
function TodoItems(props) {
  const tasks = props.tasks;
  const nbDone = tasks.filter((t) => t.isDone).length;
  function updateTask(taskUpdated) {
    props.updateTask(taskUpdated);
  }
  function deleteTask(taskDeleted) {
    props.deleteTask(taskDeleted);
  }
  return (
    <>
      <p>
        {nbDone}/{tasks.length} effectuées
      </p>
      <ul className="todoItems">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
        {/*<TodoItem title="Nourrir le chat" />
      <TodoItem title="Manger un sandwich" />
      <TodoItem title="Boire un café" />*/}
      </ul>
    </>
  );
}

export default TodoItems;
