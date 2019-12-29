let fs = require('fs');
let ws = fs.createWriteStream('./demo.txt');
ws.write('now\n', err => {
  if (!err) {
    console.log('success');
  } else {
    console.log('error');
  }
});
ws.write('doing');
ws.on('open', () => {
  console.log('stream open');
});
ws.on('close', () => {
  console.log('stream closed');
});
ws.close(); //ws.end()
