// Create a function for the parameters

const createTaskHtml = (id,name,description,assignedTo,dueDate,status) => 
    `<div class="col card list-group-item" data-task-id=${id}>
          <div class="card-body">
           <div>
            <h5 class="card-title">${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
           </div> 
            
            <div>
            <p class="card-text text-info">${assignedTo}</p>
            <p class="card-text text-info">${dueDate}</p>
            </div>

            <p class="card-text text-info">${description}</p>

            <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-success done-button ${status === 'To do' ? 'visible' : 'invisible'}">Mark As Done</button>
            </div>
        
  
          </div>
        </div>`
    //     `<li class="list-group-item" data-task-id=${id}>
    //     <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    //         <h5>${name}</h5>
    //         <span class="badge badge-danger">${status}</span>
    //     </div>
    //     <div class="d-flex w-100 mb-3 justify-content-between">
    //         <small>Assigned To: ${assignedTo}</small>
    //         <small>Due: ${dueDate}</small>
    //     </div>
    //     <p>${description}</p>
    //     <div class="d-flex w-100 justify-content-end">
    //         <button class="btn btn-outline-success done-button ${status === 'To do' ? 'visible' : 'invisible'}">Mark As Done</button>
    //     </div>
    // </li>`
;









// Create a TaskManager class

class TaskManager {
    
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }


// 
// create a method to add Task
addTasks(name,description,assignedTo,dueDate){
   
    const task = {
        id : this.currentId++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: "To do"
      

    };
    this.tasks.push(task);
    // console.log(task);
    // console.log(task.dueDate);
    
}


getTaskById(taskId){
    let foundTask;
    for(let i=0; i<this.tasks.length; i++){

        const task = this.tasks[i];
        if(task.id===taskId){
            foundTask = task;

        }
    }
    return foundTask;

}

// render method

render(){

// create an array to store all the tasks in html
    const tasksHtmlList = [];
    // console.log(this.tasks[0].dueDate);

    // loop over for each TaskManager's task
    for(let i=0; i<this.tasks.length; i++){

        // storing the value of the current task 
        const task = this.tasks[i];
         
        // console.log(task.dueDate);

        //  formate date
        const date = new Date(task.dueDate);

        // console.log(date);
        // console.log(task.status);

        const formattedDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+ date.getFullYear();
         
        // create taskHtml to store current html task
        const taskHtml = createTaskHtml(task.id,task.name,task.description,task.assignedTo,formattedDate,task.status);
        
        // push this task into Array
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
