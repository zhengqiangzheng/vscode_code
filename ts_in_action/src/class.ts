abstract class Animal {
  eat() {
    console.log('eat');
  }
  abstract sleep(): void;
}
class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string = 'dog';
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4;
  static food: string = 'bones';
  sleep() {
    console.log('dog sleep');
  }
}

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    this.pro();
  }
}
class Cat extends Animal {
  sleep() {
    console.log('cat sleep');
  }
}
let dog = new Dog('wangwang');
let cat = new Cat();
let animals: Animal[] = [dog, cat];

interface length {
  length: number;
}
function log<T extends length>(value: T): T {
  //泛型约束 必须有length 属性
  console.log(value, value.length);
  return value;
}
