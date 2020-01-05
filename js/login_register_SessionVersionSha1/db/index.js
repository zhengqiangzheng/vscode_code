let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const DB_NAME = 'students';
const DB_URL = 'localhost:27017';

//使用promise更好的解决了回调的问题，下面有三种写法
module.exports = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  mongoose.connection.on('open', err => {
    if (!err) {
      resolve();
      console.log('success');
      console.log(1);
    } else {
      reject();
      console.log(err);
    }
  });
});
