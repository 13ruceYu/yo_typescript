(() => {
  // use property decorator to define property more specific
  /**
   * 1. public: default decorator, property can be modified any where
   * 2. private: only be accessible within class
   * 3. protected: only be accessible within class and children class
   * 
   */
  class Person {
    public _name: string;
    private _age: number;
    private _gender: string;
    protected _height: number

    constructor(name: string, age: number, gender: string, height: number) {
      this._name = name;
      this._age = age;
      this._gender = gender;
      this._height = height;
    }

    getAge() {
      return this._age;
    }

    setAge(age: number) {
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

  boy._name = 'giaoge'
  // boy._age = -12
  // console.log(boy._age);
  console.log(boy.getAge());
  boy.setAge(-111);

  boy.gender = 'female';
  console.log(boy.gender)

  class Male extends Person {
    say() {
      // console.log(this._age); use protected 
      console.log(this._height);
    }
  }

  class SimpleGrammer {
    constructor(public name: string, private age: number, protected height: number) {

    }
  }

  const yo = new SimpleGrammer('hoo', 23, 170)

  console.log(boy);

})()