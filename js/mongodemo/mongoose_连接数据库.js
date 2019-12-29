let mongoose = require('mongoose');
// 指定约束
let Schema = mongoose.Schema;
let studentSchema = new Schema({
  stu_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  hobby: [String],
  info: {
    type: Schema.Types.Mixed //接受所有类型
  },
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: 'Y'
  }
});
let studentModel = mongoose.model('students', studentSchema);
//使用promise更好的解决了回调的问题，下面有三种写法
let dbPromise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/students', {
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

//第一种调用promise写法
// dbPromise
//   .then(resolve => {
//     console.log('first promise success');
//   })
//   .then(reject => {
//     console.log('first promise failed');
//   });
// //第二种写法
// dbPromise
//   .then(resolve => {
//     console.log('second promise success');
//   })
//   .catch(reject => {
//     console.log('second promise failed');
//   });
//第三种写法
(async () => {
  await dbPromise;
  console.log('third promise success');
})();
