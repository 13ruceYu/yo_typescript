/**
 * use key word "class" define a class
 * a object contains two main parts:
 * 1. property
 * 2. method
 */
class Person {
  /**
   * define property
   * two kinds of property
   * 1. instance property
   * 2. static(class) property: use "static" decorator
   */
  name: string = 'kong';
  static age: number = 25;

  /**
   * define method
   * two kinds of methods
   * 1. instance method
   * 2. static(class) method
   */
  sayHello() {
    console.log('hello');
  }
  static sayYo() {
    console.log('yoooo');
  }

}

const p = new Person();
console.log(p.name, Person.age);
p.sayHello();
Person.sayYo();
