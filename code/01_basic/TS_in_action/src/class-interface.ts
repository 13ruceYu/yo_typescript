// 类与接口的关系
interface Human {
  name: string;
  eat(): void;
}
// 接口只能约束类的共有成员
class Asian implements Human {
  constructor (name: string) {
    this.name = name
  }
  name: string
  eat() {}
  sleep () {}
}

// 接口可以像类一样相互继承，一个接口可以继承多个接口
interface Man extends Human {
  run (): void
}

interface Child {
  crying (): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  run () {},
  name: '',
  eat () {},
  crying () {}
}

// 接口继承类，相当于接口把类的成员抽象了出来
// 只有成员结构，而没有具体的实现
class Auto {
  state = 1
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {
  
}