// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, 'string']

// 元祖：是一种特殊的数组，限定了数组元素的类型和个数
let tuple: [number, string] = [1, 'string']
// tuple.push('1')
// console.log(tuple)
// tuple[2]

// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象类型
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 2

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

// undefined, null
let un: undefined = undefined // 当注解为 undefined 时，只能赋值 undefined
let nu: null = null // null 同理
// 思考：其他类型可以赋值 undefined 和 null 吗？
// 回答：可以，undefined 和 null 为其他类型的子类型，需要配置 ts.config.json -> strictNullChecks
num = null
num = undefined

// void: 一种操作符，可以让任何表达式返回 undefined，函数没有任何返回就是 undefined
let noReturn = () => {}

// any，可以任意赋值
let x
x = 1
x = 'string'

// never，表示永远不会有返回值的类型: 抛异常；死循环
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while (true) {}
}

