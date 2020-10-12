interface Girl {
  name: string;
}
class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}
const selectGirls = new SelectGirl([{ name: '123' }, { name: '111' }]);
console.log(selectGirls.getGirl(0));
