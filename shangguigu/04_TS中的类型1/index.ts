// 字面量声明
let a: 10;
a = 10;
a = 11;

// 联合类型：使用 ｜ 分隔连接
let b: 'male' | 'female';
b = 'male';
b = 'hybird';

let c: number | string;
c = 'whh';
c = 1222;

// any 任意类型 不建议使用
let d: any;
d = true;
d = 111;
d = 'sdfs';
// 当 any 变量赋值给其他类型变量时，类型检查不起作用！！！⚠️
let e: boolean;
e = d;

// 隐式 any 要避免使用
let f;
f = 111;
f = '1111';

// unknown 未知类型；类型安全的 any；用过 as 类型断言可赋值
let g: unknown;
g = 111;
let h: string;
h = g as string;
h = <string>g;

// void 表示空，以函数为例，表示没有返回值
function fn(): void {
  return null;
}

// never 表示没有返回值的函数，比如报错函数
function fn2(): never {
  throw new Error('抛个错。❌')
}

/**
 * 总结：
 * 1. number
 * 2. string
 * 3. boolean
 * 4. 字面量
 * 5. any
 * 6. unknown
 * 7. void
 * 8. never
 */

