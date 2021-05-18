// ajout d'un label et checkbox
function TodoItem(props) {
  return (
    <li>
      <label className="listLabel" htmlFor="title">
        {props.title}
      </label>
      <input type="checkbox"></input>
      <span className="customCheckBox"></span>
    </li>
  );
}
export default TodoItem;
