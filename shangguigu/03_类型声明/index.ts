let a: number;

a = 1;
a = 2323232;
// a = 'foo'; // 报错，但依然可以通过 tsc 编译

function sum(a: number, b: number): number {
  return a + b;
}

let res = sum(323, 44);