# todo

## 传统写法

1. 绑定事件处理函数：数据 <--> 视图
   1. 增加项
   2. 删除项
   3. 状态改变

## 面向对象、类的继承、横向切割程序

1. 程序分类
   1. 外层：事件处理函数的绑定
   2. 操作数据：addTodo、removeTodo、toggleComplete
   3. 操作 DOM：addItem、removeItem、changeComplete
   4. 管理模版：todoView -> 接受参数
