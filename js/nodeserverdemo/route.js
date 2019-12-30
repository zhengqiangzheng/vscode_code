let express = require('express');
let app = express();
//路由参数
app
  .get('/', (request, response) => {
    console.log(request.params);
    response.send('I am root route');
  })
  .get('/meishi', (request, response) => {
    console.log(request.params);
    response.send('I am meishi route');
  })
  .get('/meishi/huoguo', (request, response) => {
    console.log(request.params);
    response.send('I am huoguo route');
  })
  .get('/meishi/:id', (request, response) => {
    console.log(request.params);
    response.download('./js/nodeserverdemo/asset/test.txt');
    //response.send('I am route params');
  })
  .get('/meishi/redirect/redirect', (request, response) => {
    response.set('dem', '122');
    response.redirect('https://www.baidu.com');
    //response.send('I am route params');
  })
  .listen('3000', err => {
    if (!err) {
      console.log('success');
    } else {
      console.log(err);
    }
  });
