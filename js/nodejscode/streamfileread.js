let fs = require('fs');
let rs = fs.createReadStream(
  'C:\\Users\\郑强\\Desktop\\testfile\\AngularJS实战.pdf',
  { highWaterMark: 1024 * 1024 }
);
let ws = fs.createWriteStream(
  'C:\\Users\\郑强\\Desktop\\testfile\\AngularJS实战2.pdf'
);
rs.on('data', data => {
  console.log(data);
  ws.write(data);
  //ws.end();不能在这里关闭
});  
rs.on('open', () => {
  console.log('start');
});
rs.on('close', () => {
  console.log('end');
  ws.end(); //在这里关闭写入流
});
ws.on('open', () => {
  console.log('write start');
});
ws.on('close', () => {
  console.log('write end');
});
