import { a, b, c } from './a'; //批量导入
import { P } from './a'; //导入接口
import { f as F } from './a'; //导入取别名
import * as All from './a'; //导入 模块中的 所有成员 绑定在 all上
import myFunction from './a'; //不加 {}导入 默认

myFunction();
console.log(a, b, c);
