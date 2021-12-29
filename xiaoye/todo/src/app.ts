import { ITodoData } from "./js/typings";
import TodoEvent from './js/TodoEvent';

; ((doc) => {
  const oInput: HTMLInputElement = doc.querySelector('input')!;
  const oAddBtn: HTMLElement = doc.querySelector('button')!;
  const oTodoList: HTMLElement = doc.querySelector('.todo-list')!;

  const todoData: ITodoData[] = []

  const todoEvent = new TodoEvent(todoData, oTodoList);

  const init = (): void => {
    bindEvent()
  }

  function bindEvent(): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false);
    oTodoList.addEventListener('click', handleListClick, false);
  }

  function handleAddBtnClick(): void {
    const val = oInput.value.trim();
    if (val.length) {
      const ret = todoEvent.addTodo(<ITodoData>{
        id: new Date().getTime(),
        content: val,
        completed: false
      })
      if (ret && ret === 1001) {
        alert('列表项已存在')
        return;
      }
      oInput.value = '';
    }
  }

  function handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();

    if (tagName === 'input' || tagName === 'button') {
      const id = parseInt(tar.dataset.id!);
      switch (tagName) {
        case 'input':
          todoEvent.toggleCompleted(id, tar);
          break;
        case 'button':
          todoEvent.removeTodo(id, tar);
          break;
        default:
          break;
      }
    }
  }

  init();
})(document)
