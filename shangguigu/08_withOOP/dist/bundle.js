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
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        bark() {
            console.log('animal barkkkkkk');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        dogBark() {
            super.bark();
        }
    }
    const husky = new Dog('husky', 7);
    husky.dogBark();
})();
(() => {
    /**
     * abstract class means it can only be father of other class
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // abstract class means it can only be father of other class
    // const animal = new Animal();
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        bark() {
            console.log('you must define abstract method from your father method');
        }
        dogBark() {
            console.log('dog barking');
        }
    }
    const husky = new Dog('husky', 7);
})();
(() => {
    const obj = {
        name: 'whh',
        age: 3,
        gender: 'female'
    };
    // how to use interface with class
    class Person {
        constructor(name) {
            this.name = name;
        }
        eat() {
            throw new Error("Method not implemented.");
        }
    }
    // why use interface?
    // to restrict class, so that can be used in some specific case
})();
(() => {
    // use property decorator to define property more specific
    /**
     * 1. public: default decorator, property can be modified any where
     * 2. private: only be accessible within class
     * 3. protected: only be accessible within class and children class
     *
     */
    class Person {
        constructor(name, age, gender, height) {
            this._name = name;
            this._age = age;
            this._gender = gender;
            this._height = height;
        }
        getAge() {
            return this._age;
        }
        setAge(age) {
            age > 0 ? this._age = age : this._age = 0;
        }
        get gender() {
            return this._gender;
        }
        set gender(gender) {
            this._gender = gender;
        }
    }
    const boy = new Person('bobo', 24, 'male', 170);
    boy._name = 'giaoge';
    // boy._age = -12
    // console.log(boy._age);
    console.log(boy.getAge());
    boy.setAge(-111);
    boy.gender = 'female';
    console.log(boy.gender);
    class Male extends Person {
        say() {
            // console.log(this._age); use protected 
            console.log(this._height);
        }
    }
    class SimpleGrammer {
        constructor(name, age, height) {
            this.name = name;
            this.age = age;
            this.height = height;
        }
    }
    const yo = new SimpleGrammer('hoo', 23, 170);
    console.log(boy);
})();
(() => {
    // function fn(a: any):any {
    //   return a;
    // }
    /**
     * use generic when object or class type is not sure
     */
    function fn(a) {
        return a;
    }
    fn(19); // 自动推断
    fn('hello'); // 手动指定
    // fn<number>('hell0')
    function fn2(a, b) {
        return a;
    }
    // generic T must be Inter's class
    function fn3(a) {
        return a;
    }
    fn3({ length: 22, giao: 12 });
})();
