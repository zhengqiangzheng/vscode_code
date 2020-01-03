let express = require('express');
let { resolve } = require('path');

let app = express();
//设置模板引擎
app.set('view engine', 'ejs');
//设置模板所在目录
let viewPath = resolve(__dirname, './views');
app.set('views', viewPath);
app.get('/', (request, response) => {
  let data = [
    { name: 'zs', age: 18 },
    { name: 'zs', age: 18 },
    { name: 'zs', age: 18 },
    { name: 'zs', age: 18 }
  ];
  response.render('sample', { data: data });
});
app.listen('3000', err => {
  if (!err) {
    console.log('success');
  } else {
    console.log(err);
  }
});
