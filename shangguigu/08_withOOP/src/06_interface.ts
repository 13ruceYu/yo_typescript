(() => {
  // describe a object type
  type myType = {
    name: string,
    age: number
  }

  // interface can be declared more then once, type not
  interface myInterface {
    name: string,
    age: number
  }

  interface myInterface {
    gender: string
  }

  const obj: myInterface = {
    name: 'whh',
    age: 3,
    gender: 'female'
  }

  // interface can also restrict class
  // all properties and methods can't be assigned
  interface examInter {
    name: string;
    eat(): void;
  }

  // how to use interface with class
  class Person implements examInter {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat(): void {
      throw new Error("Method not implemented.")
    }

  }

  // why use interface?
  // to restrict class, so that can be used in some specific case
})()