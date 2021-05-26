// 抽象类与多太
abstract class Animal {
  eat () {}
  // 抽象方法，可不指定具体实现，在子类中可以有不同的实现，多态
  abstract sleep (): void
}

class Dog1 extends Animal {
  constructor (name: string) {
    super()
    this.name = name
  }
  name: string
  run () {}
  sleep () {
    console.log('dog sleep')
  }
}

let dog1 = new Dog1('whh')
dog1.eat()

class Cat extends Animal {
  sleep () {
    console.log('cat sleep')
  }
}

let cat = new Cat();

let animals: Animal[] = [dog1, cat]
animals.forEach(i => {
  i.sleep()
})

// this 类型
class WorkFlow {
  step1() {
    return this
  }

  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
  next () {
    return this
  }
}

new Myflow().next().step1().next().step2()