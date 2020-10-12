class Lady {
  content = 'hi nihao';
  sayHello() {
    return this.content;
  }
}
class Person {
  constructor(public name: string) {}
}
class Teacher extends Person {
  constructor(public age: number) {
    super('aaa');
  }
}

const teacher = new Teacher(18);
