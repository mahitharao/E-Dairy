// server.js  
const express = require('express');  
const app = express();  
const port = 3000;  
  
app.use(express.json());  
  
app.post('/bio', (req, res) => {  
   const { name, email, profilePicture } = req.body;  
   // save bio data to database  
   res.send(`Bio data saved successfully!`);  
});  
  
app.post('/diary', (req, res) => {  
   const { date, entry } = req.body;  
   // save diary entry to database  
   res.send(`Diary entry saved successfully!`);  
});  
  
app.post('/todo', (req, res) => {  
   const { task, dueDate } = req.body;  
   // save to-do list item to database  
   res.send(`To-do list item saved successfully!`);  
});  
  
app.listen(port, () => {  
   console.log(`Server listening on port ${port}`);  
});