import TodoDom from "./TodoDom";
import { addTodo, getTodoList, removeTodo, toggleTodo } from "./TodoService";
import { ITodoData } from "./typings";

export default class TodoEvent extends TodoDom {
  private todoData: ITodoData[];

  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper);
    this.todoData = todoData;
    this.init(this.todoData);
  }

  @getTodoList
  private init(todoData: ITodoData[]) {
    this.todoData = todoData;
    this.initList(this.todoData)
  }

  @addTodo
  addTodo(todo: ITodoData): undefined | number {
    const _todo: undefined | ITodoData = this.todoData.find(item => item.content === todo.content)
    if (!_todo) {
      this.todoData.push(todo);
      this.addItem(todo);
      return;
    }

    return 1001;
  }

  @removeTodo
  removeTodo(id: number, target: HTMLElement): void {
    this.todoData = this.todoData.filter(todo => todo.id === id);
    this.removeItem(target)
  }

  @toggleTodo
  toggleCompleted(id: number, target: HTMLElement): void {
    this.todoData = this.todoData.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.changeCompleted(target, todo.completed);
      }
      return todo;
    })
  }
}