// let addd: (x: number, y: number) => number

// interface Add {
//   (x: number, y: number): number
// }

// 类型别名
type Add = (x: number, y: number) => number

let addd: Add = (x, y) => x + y

// 混合类型接口
interface Lib {
  (): void,
  version: string,
  doSomething(): void
}