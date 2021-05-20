import TodoItem from "./TodoItem";
function TodoItems(props) {
  const tasks = props.tasks;
  const nbDone = tasks.filter((t) => t.isDone).length;
  const percent = (nbDone / tasks.length) * 100;
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
      <progress max="100" value={percent}></progress>
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
