/* styles.css */  
body {  
   font-family: Arial, sans-serif;  
   margin: 0;  
   padding: 0;  
}  
  
header {  
   background-color: #333;  
   color: #fff;  
   padding: 1em;  
   text-align: center;  
}  
  
nav ul {  
   list-style: none;  
   margin: 0;  
   padding: 0;  
   display: flex;  
   justify-content: space-between;  
}  
  
nav li {  
   margin-right: 20px;  
}  
  
nav a {  
   color: #fff;  
   text-decoration: none;  
}  
  
main {  
   display: flex;  
   flex-direction: column;  
   align-items: center;  
   padding: 2em;  
}  
  
section {  
   background-color: #f7f7f7;  
   padding: 1em;  
   margin-bottom: 20px;  
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
}  
  
h2 {  
   margin-top: 0;  
}  
  
form {  
   display: flex;  
   flex-direction: column;  
   align-items: center;  
}  
  
label {  
   margin-bottom: 10px;  
}  
  
input, textarea {  
   width: 100%;  
   padding: 10px;  
   margin-bottom: 20px;  
   border: 1px solid #ccc;  
}  
  
button[type="submit"] {  
   background-color: #333;  
   color: #fff;  
   padding: 10px 20px;  
   border: none;  
   border-radius: 5px;  
   cursor: pointer;  
}  
  
button[type="submit"]:hover {  
   background-color: #444;  
}  
  
#diary-entries, #todo-list {  
   list-style: none;  
   margin: 0;  
   padding: 0;  
}  
  
#diary-entries li, #todo-list li {  
   padding: 10px;  
   border-bottom: 1px solid #ccc;  
}  
  
#diary-entries li:last-child, #todo-list li:last-child {  
   border-bottom: none;  
}