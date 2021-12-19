export default class Snake {
  // snake container
  element: HTMLElement;
  // snake head
  head: HTMLElement;
  // snake body include head
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    this.head.style.top = value + 'px';
  }

  addBody() {
    const bodyItem = document.createElement('div');
    this.element.insertAdjacentElement('beforeend', bodyItem);
  }
}