(() => {
  /**
   * abstract class means it can only be father of other class
   */

  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // abstract method only be defined in abstract
    // its children class must implement
    abstract bark(): void;
  }

  // abstract class means it can only be father of other class
  // const animal = new Animal();

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
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
})()