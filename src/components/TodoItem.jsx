// ajout d'un label et checkbox
function TodoItem(props) {
  return (
    <li>
      <label htmlFor="title">{props.title}</label>
      <input type="checkbox"></input>
    </li>
  );
}
export default TodoItem;
