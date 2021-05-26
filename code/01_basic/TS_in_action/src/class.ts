// 类的继承和成员修饰符
class Dog {
  constructor(name: string) {
    this.name = name
  }
  // 默认都是 public，也可以显式地声明
  public name: string = 'dog'
  run () {}
  private pri () {}
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color
  }
  color: string
}