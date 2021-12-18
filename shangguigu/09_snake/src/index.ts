import './style/index.less'

// define food class
class Food {
  // food DOM
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    const left = Math.round(Math.random() * 29) * 10;
    const top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

const food = new Food;
food.change()
console.log(food.element, food.X, food.Y);

