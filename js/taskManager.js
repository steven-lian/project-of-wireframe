// Create and export a createTaskHtml function 
export const createTaskHtml = (id,name,description,assignedTo,dueDate,status) =>
 
 `
 <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>

    <div class="d-flex w-100 justify-content-end">
        <button class="btn btn-outline-success done-button ${status === 'To do' ? 'visible' : 'invisible'}">Mark As Done</button>
    </div>
    </li>
`;





// Create and export a TaskManager class 

export class TaskManager {
 
    //creat a empty array called tasks to store each new task object 
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

// create a method to add Task
    addTasks(name,description,assignedTo,dueDate,status){
    
    //create a task object with self-increment id and input name 
        const task = {
        id: this.currentId++,
        name: name,
        description: description,
        assignedTo : assignedTo,
        dueDate: dueDate,
        status: status
    };

    // push each new task object to the 'tasks' array.
        this.tasks.push(task);
    
  }
  
// task 7
//   Step 4: Adding getTaskById to the TaskManager class
  getTaskById(taskId) {
    // Create a variable to store the found task
    let foundTask;

    // Loop over the tasks and find the task with the id passed as a parameter
    for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];

        // Check if its the right task by comparing the task's id to the id passed as a parameter
        if (task.id === taskId) {
            // Store the task in the foundTask variable
            foundTask = task;
        }
    }

    // Return the found task
    return foundTask;
}

 // Create the render method
    render() {
    // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

    // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
            const task = this.tasks[i];

            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task.id,task.name, task.description, task.assignedTo, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join('\n');

    // Set the inner html of the tasksList on the page
    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;
    }
  
}

