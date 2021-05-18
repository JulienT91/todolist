import TodoItem from "./TodoItem";
function TodoItems() {
  return (
    <ul className="todoItems">
      <TodoItem title="Nourrir le chat" />
      <TodoItem title="Manger un sandwich" />
      <TodoItem title="Boire un café" />
    </ul>
  );
}

export default TodoItems;
