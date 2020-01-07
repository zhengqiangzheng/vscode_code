let express = require('express');
let app = express();
let { resolve } = require('path');
let publicpath = resolve(__dirname, 'public');
app.use(express.static(publicpath));
app.use(express.urlencoded({ extended: true }));
app.get('/test_get', (request, response) => {
  console.log(request.query);
  response.send('xiongdinihao');
});
app.post('/test_post', (request, response) => {
  console.log(request.body);
  response.send('post请求');
});
app.listen('3000', err => {
  if (!err) {
    console.log('success connect');
  } else {
    console.log(err);
  }
});
