interface List {
  readonly id: number; // 只读属性
  name: string;
  age?: number // 可选属性
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(el => {
    console.log(el.id, el.name)
    if (el.age) {
      console.log(el.age)
    }
  })
}

let resultR = {
  data: [
    {id: 1, name: 'whh'},
    {id: 2, name: 'whh', age: 11},
  ]
}
// 鸭式变形法，一只鸟看起来像鸭子，游起来像鸭子，叫起来像鸭子，那么就可以认定为是鸭子
render(resultR)

// render({
//   data: [
//     {id: 1, name: 'whh'},
//     {id: 2, name: 'whh', age: 11},
//   ]
// } as Result)

// 不确定接口属性的个数 -> 可索引类型的接口
// 数字索引接口
interface StringArray {
  [index: number]: string
}
let charas: StringArray = ['A', 'B']

// 字符串索引接口
interface Names {
  [x: string]: string,
  [y: number]: string // 混用
}