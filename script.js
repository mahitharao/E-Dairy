// script.js  
const bioForm = document.querySelector('#bio form');  
const diaryForm = document.querySelector('#diary form');  
const todoForm = document.querySelector('#todo form');  
const diaryEntries = document.querySelector('#diary-entries');  
const todoList = document.querySelector('#todo-list');  
  
bioForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const name = document.querySelector('#name').value;  
   const email = document.querySelector('#email').value;  
   const profilePicture = document.querySelector('#profile-picture').files[0];  
   // save bio data to local storage or database  
});  
  
diaryForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const date = document.querySelector('#date').value;  
   const entry = document.querySelector('#entry').value;  
   // save diary entry to local storage or database  
   const diaryEntry = document.createElement('li');  
   diaryEntry.textContent = `${date}: ${entry}`;  
   diaryEntries.appendChild(diaryEntry);  
});  
  
todoForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const task = document.querySelector('#task').value;  
   const dueDate = document.querySelector('#due-date').value;  
   // save to-do list item to local storage or database  
   const todoItem = document.createElement('li');  
   todoItem.textContent = `${task} (Due: ${dueDate})`;  
   todoList.appendChild(todoItem);  
});