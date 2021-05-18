import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
function TodoList(props) {
  return (
    <div className="todoList">
      <TodoForm />
      <TodoItems />
    </div>
  );
}

export default TodoList;
