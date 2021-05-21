class Dog {
  constructor(name: string) {
    this.name = name
  }
  public name: string = 'dog'
  run () {}
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