import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
function TodoList() {
  return (
    <div className="todoList">
      <h1>
        <i class="fas fa-clipboard-list"></i> TodoList
      </h1>
      <TodoForm />
      <TodoItems />
    </div>
  );
}

export default TodoList;
