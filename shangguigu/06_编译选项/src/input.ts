import { mm } from './modules/m'

let b: string[];
b = ['hola'];
console.log(mm);

function fn(a: number, b: number) {
  return a + b;
}

function fnn(this: Window) {
  console.log(this)
}

const box = document.getElementById('box');
box && box.addEventListener('click', () => {
  console.log('clicked');
})

