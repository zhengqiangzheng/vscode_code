interface Waiter {
  anjiao: boolean;
  say: () => {};
}
interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
function judgewho1(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  } else {
    (animal as Waiter).say();
  }
}
function judgewho2(animal: Waiter | Teacher) {
  if ('skill' in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}

class NumberObj {
  count: number;
  constructor(public outcount: number) {
    this.count = outcount;
  }
}
function addObj(first: NumberObj | object, second: NumberObj | object) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  } else {
    return 0;
  }
}
