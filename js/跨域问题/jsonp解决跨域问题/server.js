let express = require('express');
let app = express();
app.get('/testjsonp', (request, response) => {
  const { callback } = request.query;
  console.log(callback);
  let arr = [
    { name: 'james', age: 35 },
    { name: 'docic', age: 20 }
  ];
  response.send(`${callback}(${JSON.stringify(arr)})`);
});
app.listen('3000', err => {
  if (!err) {
    console.log('success');
  } else {
    console.log(err);
  }
});
