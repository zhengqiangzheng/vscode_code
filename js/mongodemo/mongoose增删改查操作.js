let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const DB_NAME = 'students';
const DB_URL = 'localhost:27017';

//使用promise更好的解决了回调的问题，下面有三种写法
let dbPromise = new Promise((resolve, reject) => {
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

(async () => {
  await dbPromise;
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
  //操作数据库
  //1 插入数据
  //   let createResult = await studentModel.create(
  //     {
  //       stu_id: '20191228005',
  //       name: '小红',
  //       age: 23,
  //       sex: '女',
  //       hobby: ['sing', 'dance', 'eat'],
  //       info: 'beautiful',
  //       enable_flag: true
  //     }
  //     // (err, data) => {
  //     //   if (!err) {
  //     //     console.log('insert successfully');
  //     //   } else {
  //     //     console.log(err);
  //     //   }
  //     // }
  //   );
  //   console.log(createResult); //不传回调函数 promise自动注入数据

  //2 .查询数据,还有find 返回数组
  //   let queryResult = studentModel.findOne(
  //     { age: 23 },
  //     { name: 1, _id: 0 },
  //     (err, data) => {
  //       if (!err) {
  //         console.log(data);
  //       } else {
  //         console.log(err);
  //       }
  //     }
  //   );
  //   // console.log(queryResult);
  //更新数据
  //   let updateResult = await studentModel.updateMany(
  //     { sex: '不男不女' },
  //     { sex: '男' }
  //   );
  //   console.log(updateResult);
  //删除数据
  let delResult = await studentModel.deleteOne({ name: 'ls' });
  console.log(delResult);
})();
