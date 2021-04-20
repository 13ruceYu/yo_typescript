# yo Typescript - 类型思维

* 类型检查：TS 会在编译代码时进行严格的类型检查；
* 语言扩展：对 JS advanced feature 的引入，以及其他语言的借鉴；
* 工具属性：最终可以编译为 JavaScript。

## 一、基础篇

### 1.1 语言类型

* 强类型语言 & 弱类型语言
* 静态类型语言 & 动态类型语言

### 1.2 数据类型

JS 数据类型：

  1. boolean
  2. number
  3. string
  4. undefined
  5. null
  6. symbol/基本 & 引用
  7. object
  8. array
  9. function

TS 新增数据类型：

  1. void
  2. any
  3. never
  4. 元祖
  5. 枚举：enum，实现原理反向映射
  6. 高级类型

### 1.3 类型注解

* 作用：相当于强类型语言中的类型声明
* 语法：(variable/function): type

void: 不返回值，JS 里 undefined 不是保留字，可被覆盖，所以使用 void 0，是更好的选择。
