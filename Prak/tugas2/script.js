let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

// Function to add a new task
function addTask() {
    let taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    let taskItem = document.createElement('li');
    
    let taskText = document.createElement('span');
    taskText.classList.add('text');
    taskText.innerText = taskValue;

    // Create Edit button
    let editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';
    editButton.onclick = function() {
        let newTask = prompt("Edit your task:", taskText.innerText);
        if (newTask) {
            taskText.innerText = newTask;
        }
    };

    // Create Delete button with confirmation alert
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        let confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            taskList.removeChild(taskItem);
        }
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
    taskInput.value = "";  // Clear input field
}
