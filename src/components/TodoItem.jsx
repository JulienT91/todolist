// ajout d'un label et checkbox
function TodoItem(props) {
  const task = props.task;
  function onCheck() {
    props.updateTask({
      ...task,
      isDone: !task.isDone,
    });
  }
  function onDelete() {
    props.deleteTask(task);
  }
  return (
    <li>
      <label className="listLabel" htmlFor={task.id}>
        {task.title}
        <input
          type="checkbox"
          id={task.id}
          defaultChecked={task.isDone}
          onChange={onCheck}
        ></input>
      </label>
      <button
        type="button"
        className="small transparent"
        title="Supprimer cette tâche"
        onClick={onDelete}
      >
        ❌
      </button>
    </li>
  );
}
export default TodoItem;
