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

let d: (a: string, b: number) => string;

d = (a, b) => a + b
