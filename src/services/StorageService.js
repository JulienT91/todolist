const KEY = "todoapp:lists";

const StorageService = {
  getTodoLists() {
    return JSON.parse(window.localStorage.getItem(KEY)) || [];
  },
  saveTodoLists(todosArray) {
    window.localStorage.setItem(KEY, JSON.stringify(todosArray));
  },
};

export default StorageService;
