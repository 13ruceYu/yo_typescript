import { ITodoData } from "./js/typings";

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

  const init = (): void => {
    bindEvent()
  }

  function bindEvent(): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false);
    oTodoList.addEventListener('click', handleListClick, false);
  }

  function handleAddBtnClick(): void {

  }

  function handleListClick(e: MouseEvent): void {

  }

  init();
})(document)
