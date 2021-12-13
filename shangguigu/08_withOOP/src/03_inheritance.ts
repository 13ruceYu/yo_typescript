(() => {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    bark() {
      console.log('ananananimal');
    }
  }

  class Dog extends Animal {
    bark(): void {
      console.log('wangwangwang');

    }
  }

  class Cat extends Animal {

  }

  const husky = new Dog('husky', 2);
  const kity = new Cat('kity', 3);
  husky.bark();
  kity.bark();

})()