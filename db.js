// db.js  
const mongoose = require('mongoose');  
  
mongoose.connect('mongodb://localhost:27017/e-diary', { useNewUrlParser: true, useUnifiedTopology: true });  
  
const bioSchema = new mongoose.Schema({  
   name: String,  
   email: String,  
   profilePicture: String  
});  
  
const diarySchema = new mongoose.Schema({  
   date: Date,  
   entry: String  
});  
  
const todoSchema = new mongoose.Schema({  
   task: String,  
   dueDate: Date  
});  
  
const Bio = mongoose.model('Bio', bioSchema);  
const Diary = mongoose.model('Diary', diarySchema);  
const Todo = mongoose.model('Todo', todoSchema);  
  
module.exports = { Bio, Diary, Todo };