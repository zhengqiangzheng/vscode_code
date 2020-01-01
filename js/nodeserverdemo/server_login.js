let express = require('express');
let mongoose = require('mongoose');
let app = express();
app.use(express.urlencoded({ extended: true }));
app.post('/login', (request, respnse) => {
  console.log(request.body);
  respnse.send('ok');
});
app.post('/register', (request, respnse) => {
  console.log(request.body);
  respnse.send('ok');
});
//页面
app.get('/login', (req, rep) => {
  rep.sendfile(__dirname + '/public/login.html');
});
app.get('/register', (req, rep) => {
  rep.sendfile(__dirname + '/public/register.html');
});
app.listen('3000', err => {
  if (!err) {
    console.log('success connected');
  } else {
    console.log(err);
  }
});
