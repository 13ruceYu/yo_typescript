import $ from 'jquery'
import { ITodoData } from './typings';

export function getTodoList(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log('tttt', target,);
  console.log('mmmm', methodName,);
  console.log('dddd', descriptor);

  const _origin = descriptor.value;

  descriptor.value = function (todoData: ITodoData[]) {
    $.get('http://localhost:8080/todolist').then((res: string) => {
      if (!res) {
        return
      }
      todoData = JSON.parse(res);
    }).then(() => {
      _origin.call(this, todoData)
    })
  }

}