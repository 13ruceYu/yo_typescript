import { ITodoData } from "./typings";

export default class TodoTemplate {
  protected todoView({ id, content, completed }: ITodoData) {
    return `
      <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
      <span style="text-decoration: ${completed ? 'line-through' : 'none'}">${content}</span>
      <button data-id="${id}">delete</button>
    `
  }
}