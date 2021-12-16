(() => {
  // function fn(a: any):any {
  //   return a;
  // }

  /**
   * use generic when object or class type is not sure
   */
  function fn<G>(a: G): G {
    return a;
  }

  fn(19); // 自动推断

  fn<string>('hello'); // 手动指定
  // fn<number>('hell0')

  function fn2<T, K>(a: T, b: K): T {
    return a;
  }

  interface Inter {
    length: number
  }

  // generic T must be Inter's class
  function fn3<T extends Inter>(a: T): T {
    return a;
  }

  fn3({ length: 22, giao: 12 })

})()