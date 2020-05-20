//原始类型
let bool: boolean = true;
let num: number = 123;

//数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '23'];

//元组
let tuple: [number, string] = [0, '1'];

//函数
let add = (x: number, y: number) => x + y;

let compute: (x: number, y: number) => number;

compute = (a, b) => a + b;

//对象
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined null
let un: undefined = undefined;
let nu: null = null;
//"strictNullChecks": false /* Enable strict null checks. */, in tsconfig.json
num = undefined; //

// void
let noReturn = () => {};

//any
let x;

// never

let err = () => {
  throw new Error('error');
};

let endless = () => {
  while (true) {}
};
