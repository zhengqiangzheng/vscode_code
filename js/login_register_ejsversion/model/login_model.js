let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const DB_NAME = 'login';
let Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  nick_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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
module.exports = mongoose.model(DB_NAME, studentSchema);
