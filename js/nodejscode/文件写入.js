let fs = require('fs');
fs.writeFile('./1224.txt', ' everyone', { flag: 'a' }, err => {
  if (!err) {
    console.log('success');
  } else {
    console.log('error');
  }
});
