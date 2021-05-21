class Dog {
  constructor(name: string) {
    this.name = name
  }
  name: string = 'dog'
  run () {}
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)