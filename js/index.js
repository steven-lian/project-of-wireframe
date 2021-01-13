

// task6
// call function
//import {createTaskHtml} from './taskManager.js';
const taskHtml = createTaskHtml("name","description","assignedTo","dueDate","status");
console.log(taskHtml);




// task5
// import TaskManager from './taskManager';
//import {TaskManager} from './taskManager.js';
const taskManager = new TaskManager(0);
// console.log(taskManager.tasks);

//task8
taskManager.load();
taskManager.render();

// const taskManager2 = new TaskManager(0);
// taskManager.addTasks("name","description","assignedTo","dueDate","status");
console.log(taskManager.tasks);

// const newTaskForm = document.querySelector('#formFieldInput');



// task4
// select formFieldInput form
const formFieldInput = document.querySelector("#formFieldInput");

//add an onsubmit event listener
formFieldInput.addEventListener("submit",(event) => {

    //prevent default action when submitting form
    event.preventDefault();
    // event.stopPropagation();



    //select input
    const formFieldName = document.querySelector("#formFieldName");
    const formFieldDescription = document.querySelector("#formFieldDescription");
    const formFieldAssigned = document.querySelector("#formFieldAssigned");
    const formFieldDue = document.querySelector("#formFieldDue");
    const formFieldStatus = document.querySelector("#formFieldStatus");
    const errorMessage = document.querySelector("#alertMessage");
    errorMessage.innerHTML = "";



    // validation code

    function validFormFieldInput(){
        // let name = document.forms["formFieldInput"]["formFieldName"].value;
        if(name===""){
            errorMessage.innerHTML += "Invalid name input";
           
        }

        // let description = document.forms["formFieldInput"]["formFieldDescription"].value;
        if(description===""){
            errorMessage.innerHTML += "Invalid description input";
           
        }

        // let assigned = document.forms["formFieldInput"]["formFieldAssigned"].value;
        if(assigned===""){
            errorMessage.innerHTML += "Invalid assigned input";
         
        }

        // let due = document.forms["formFieldInput"]["formFieldDue"].value;
        if(due===""){
            errorMessage.innerHTML += "Invalid due input";
            
        }

        // let status = document.forms["formFieldInput"]["formFieldStatus"].value;
        if(status===""){
            errorMessage.innerHTML += "Invalid status input";
            
        }

        
    };


    // get the value of input

    const name = formFieldName.value;
    const description= formFieldDescription.value;
    const assigned = formFieldAssigned.value;
    const due = formFieldDue.value;
    const status = formFieldStatus.value;
    //  console.log(due);
    if(!validFormFieldInput(name,description,assigned,due,status)){
        
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }


    // Add the task to the task manager
    taskManager.addTasks(name, description, assigned, due);

    taskManager.save();

   
    taskManager.render();
    


    // Clear the form
    formFieldName.value = '';
    formFieldDescription.value = '';
    formFieldAssigned.value = '';
    formFieldDue.value = '';


    



});

// Select the Tasks List
const tasksList = document.querySelector('#tasksList');

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement;
        console.log(parentTask);

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
        console.log(taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);
        console.log(task);

        // Update the task status to 'DONE'
        task.status = 'DONE';
         
        taskManager.save();
        // Render the tasks
        taskManager.render();
    }

  // Check for delete button clicked
    if (event.target.classList.contains('delete-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Delete the task
        taskManager.deleteTask(taskId);

        // Save the tasks to localStorage
        taskManager.save();

        // Render the tasks
        taskManager.render();
    }
});

function validFormFieldInput(data) {
    return data !== null && data !== '';
}


