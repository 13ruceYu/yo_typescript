class Dog {
  name: string;
  age: number;
  /**
   * when some property assign when instantiation
   */
  constructor(name: string, age: number) {
    console.log('---constructor invoked bro!---');
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(this.name + 'wangwang');
  }
}

const husky = new Dog('husky', 3);
husky.bark()