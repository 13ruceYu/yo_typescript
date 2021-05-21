// 函数定义
function add2(x: number, y: number) {
  return x + y
}

// 变量定义函数类型
let add3: (x: number, y: number) => number

// 类型别名定义函数
type add4 = (x: number, y: number) => number

// 接口定义函数
interface add5 {
  (x: number, y: number): number
}

// TS 形参与实参必须一一对应
// add2(2, 3, 4)

// 可选参数
function add6(x: number, y?: number) {
  return x + y
}

add6(6)
// 可选参数必须位于必选参数之后

function add7 (x: number, y=1, z: number, q = 3) {
  return x + y + z + q
}
console.log(add7(0, undefined, 3))

// 剩余参数
function add8(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add8(1, 2, 3, 4))

// 函数重载
function add9(...rest: number[]): number;
function add9(...rest: string[]): string;
function add9(...rest: any[]) {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join(',')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}