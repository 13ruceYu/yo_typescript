import { ITodoData } from "./js/typings";
import TodoEvent from './js/TodoEvent';

; ((doc) => {
  const oInput: HTMLElement = doc.querySelector('input');
  const oAddBtn: HTMLElement = doc.querySelector('button');
  const oTodoList: HTMLElement = doc.querySelector('.todo-list');

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: '123',
      completed: true
    },
    {
      id: 2,
      content: '234',
      completed: false
    },
    {
      id: 3,
      content: '345',
      completed: true
    }
  ]

  const todoEvent = new TodoEvent(todoData, oTodoList);

  const init = (): void => {
    bindEvent()
  }

  function bindEvent(): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false);
    oTodoList.addEventListener('click', handleListClick, false);
  }

  function handleAddBtnClick(): void {
    todoEvent.addTodo({
      id: 4,
      content: "55",
      completed: false
    })
  }

  function handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName;

    if (tagName === 'input' || tagName === 'button') {
      switch (tagName) {
        case 'input':
          break;
        case 'button':
          break;
        default:
          break;
      }
    }
  }

  init();
})(document)
