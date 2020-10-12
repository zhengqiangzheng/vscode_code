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
