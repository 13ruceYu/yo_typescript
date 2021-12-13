"use strict";
/**
 * use key word "class" define a class
 * a object contains two main parts:
 * 1. property
 * 2. method
 */
class Person {
    constructor() {
        /**
         * define property
         * two kinds of property
         * 1. instance property
         * 2. static(class) property: use "static" decorator
         */
        this.name = 'kong';
    }
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
Person.age = 25;
const p = new Person();
console.log(p.name, Person.age);
p.sayHello();
Person.sayYo();
class Dog {
    /**
     * when some property assign when instantiation
     */
    constructor(name, age) {
        console.log('---constructor invoked bro!---');
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name + 'wangwang');
    }
}
const husky = new Dog('husky', 3);
husky.bark();
(() => {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log('ananananimal');
        }
    }
    class Dog extends Animal {
        bark() {
            console.log('wangwangwang');
        }
    }
    class Cat extends Animal {
    }
    const husky = new Dog('husky', 2);
    const kity = new Cat('kity', 3);
    husky.bark();
    kity.bark();
})();
