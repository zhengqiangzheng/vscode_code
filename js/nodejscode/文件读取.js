let fs = require('fs');
fs.readFile('./1224.txt', (err, data) => {
  if (!err) {
    console.log(data);
    console.log(data.toString());
    // 拷贝到上一层
    fs.writeFile('../upper.txt', data, function(ex) {
      if (!ex) {
        console.log('success');
      }
    });
  } else {
    console.log(err);
  }
});
