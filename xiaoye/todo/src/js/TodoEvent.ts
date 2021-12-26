import { ITodoData } from "./typings";

class TodoEvent {
  private todoData: ITodoData[];

  constructor(todoData: ITodoData[]) {
    this.todoData = todoData;
  }

  addTodo(todo: ITodoData): undefined | number {
    const _todo: null | ITodoData = this.todoData.find(item => item.content === todo.content)
    if (!_todo) {
      this.todoData.push(todo);
      return;
    }

    return 1001;
  }

  removeTodo(id: number): void {
    this.todoData = this.todoData.filter(todo => todo.id === id);
  }

  toggleTodo(id: number): void {
    this.todoData = this.todoData.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  }
}