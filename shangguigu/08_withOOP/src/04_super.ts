(() => {
  class Animal {
    name: string;

    constructor(name: string,) {
      this.name = name;
    }

    bark() {
      console.log('animal barkkkkkk');
    }
  }

  class Dog extends Animal {
    /**
     * super 代表继承的父类
     * 当子类继承父类时调用 constructor 方法后，在方法内部需调用 super 方法（因为子类的 constructor 重写了父类中的 constructor 方法）
     */
    age: number;
    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }
    dogBark() {
      super.bark()
    }
  }

  const husky = new Dog('husky', 7);
  husky.dogBark()
})()