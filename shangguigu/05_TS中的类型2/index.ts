// object
let a: object;
a = {};
a = [];
a = () => { };

// 关注的是对象内部数据的类型
let b: { id: string, age?: number };
// b = {}
// b = {id: 11}
b = { id: '11' }

let c: { id: string, [key: string]: any }

/**
 * 设置函数结构的类型声明
 */
let d: (a: string, b: number) => string;

d = (a, b) => a + b

/**
 * 数组
 * 原生 JS 中同一数组内的元素可以为任意类型（[1, 'lala', fn]），这样的存储效率不是很高。
 * 在开发中，我们一般在一个数组内存储的都是相同的元素。
 */
// 字符串数组: string[], Array<string>
let f: string[];
f = ['a', 'b', 'c'];
// f = ['a', 'b', 'c', 1];
let g: Array<string>;
g = ['a', 'b', 'c'];

/**
 * 元祖 tuple
 * 数组内元素数量且类型固定的数组
 */
let h: [string, number];
h = ['s', 1];

/**
 * 枚举 enum
 * 用于常量 map
 */
enum Gender {// 貌似自动转化为 0，1，...
  MALE,
  FEMALE
}

let i: {
  name: string,
  gender: Gender
}

i = {
  name: 'whh',
  gender: Gender.FEMALE
}

/**
 * 类型别名
 */
type myType = string;
let j: myType;
j = 'lalalala';

type yourType = 1 | 2 | 3 | 4;
let k: yourType;
k = 4;

