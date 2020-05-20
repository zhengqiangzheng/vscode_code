// 数字枚举
enum Role {
  Reporter,
  Developer,
  Manintainer,
  Owner,
  Guest,
}
interface List {
  readonly id: number;
  name: string;
  age?: number; //可选属性
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
  });
}
let result = {
  data: [
    { id: 1, name: 'zs', sex: 'male', age: 18 },
    { id: 2, name: 'lsi' },
  ],
};
render(result);
