// import createTaskHtml function from './taskManager';
import {createTaskHtml} from './taskManager.js';

const taskHtml = createTaskHtml ('name','description','assignedTo','dueDate','status')

console.log(taskHtml);

// import TaskManager class from './taskManager';

import {TaskManager} from './taskManager.js';

//create two new instances to test 
const taskManager = new TaskManager(0);
// taskManager.addTasks("sgbvv","hhh","jjj","hgh","cc");
// console.log(taskManager.tasks);

// const taskManager2 = new TaskManager(0);
// taskManager2.addTasks("sgbvv","hhh","jjj","hgh","cc");
// console.log(taskManager2.tasks);


// select formFieldInput form
const formFieldInput = document.querySelector("#formFieldInput");

//add an onsubmit event listener to the form tag
formFieldInput.addEventListener("submit",(event) => {


    //prevent default action of refreshing page when submitting form
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

    // get the value of input

    const name = formFieldName.value;
    const description= formFieldDescription.value;
    const assigned = formFieldAssigned.value;
    const due = formFieldDue.value;
    const status = formFieldStatus.value;

    // validation code

    function validFormFieldInput(){
        // let name = document.forms["formFieldInput"]["formFieldName"].value;
        if(name===""){
            errorMessage.innerHTML += "Invalid name input; " ;
           
        }

        // let description = document.forms["formFieldInput"]["formFieldDescription"].value;
        if(description===""){
            errorMessage.innerHTML += "Invalid description input; ";
           
        }

        // let assigned = document.forms["formFieldInput"]["formFieldAssigned"].value;
        if(assigned===""){
            errorMessage.innerHTML += "Invalid assigned input; ";
         
        }

        // let due = document.forms["formFieldInput"]["formFieldDue"].value;
        if(due===""){
            errorMessage.innerHTML += "Invalid due input; ";
            
        }

        // let status = document.forms["formFieldInput"]["formFieldStatus"].value;
        if(status===""){
            errorMessage.innerHTML += "Invalid status input";
            
        }
    };


    // control the div with id named errorMessage in taskslist.html content display mathod

    if(!validFormFieldInput(name,description,assigned,due,status)){
        
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none";

        
    }

    // Add all new task form input value to the task manager when click submit
        
        //  const newTaskSubmit = new TaskManager(0);
         taskManager.addTasks(name,description,assigned,due,status);
        //  console.log(taskManager.tasks);

    // Render the tasks
    taskManager.render();

    // Clear the form input value after submitting 
    formFieldName.value = '';
    formFieldDescription.value = '';
    formFieldAssigned.value = '';
    formFieldDue.value = '';
    formFieldStatus.value = '';

        
});


// function validFormFieldInput(data){
//     return data !== null && data !== '';
// }
// Select the Tasks List
const tasksList = document.querySelector('#tasksList');

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;
       
        // test "Mark As Done" button on the newly created task
        // console.log(parentTask);

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);
        // console.log(task);

        // Update the task status to 'DONE'
        task.status = 'DONE';
       
        // Render the tasks
        taskManager.render();
    }
});

