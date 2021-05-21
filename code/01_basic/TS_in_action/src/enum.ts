// 枚举类型: 枚举的实现原理：反向映射
// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Developer)
console.log(Role[2])

// 字符串枚举，不可进行反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员性质
// Role.Developer = 2 只读，不可修改
// 枚举成员分类
// 分类两类：const member 常量枚举
enum Char {
  a, // 1. 没有初始值
  b = Char.a, // 2. 对已有枚举成员的应用
  c = 1 + 2, // 3. 常量的表达式
  // computed member, 其之后的成员一定要赋予初始值
  d = Math.random(),
  e = '124'.length
}

// 常量枚举：const
const enum Month {
  Jan,
  Feb,
  Mar
}
