class XiaoJieJie {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10;
  }
  set age(_age) {
    this._age = _age;
  }
}
console.log(new XiaoJieJie(28).age);
