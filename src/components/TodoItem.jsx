import EditableField from "./EditableField";

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
  function onNewValue(value) {
    props.updateTask({
      ...task,
      title: value,
    });
  }
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        defaultChecked={task.isDone}
        onChange={onCheck}
      />
      <label htmlFor={task.id}>
        <EditableField
          value={task.title}
          editMode={false}
          onNewValue={onNewValue}
        />
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
