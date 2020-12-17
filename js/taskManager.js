// Create a function for the parameters

const createTaskHtml = (name,description,assignedTo,dueDate,status) => 
    `<div class="col card list-group-item-secondary">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-info">${status}</h6>
            <p class="card-text text-info">${description}</p>
            <p class="card-text text-info">${assignedTo}</p>
            <p class="card-text text-info">${dueDate}</p>
  
          </div>
        </div>`
;









// Create a TaskManager class

class TaskManager {
    
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }


// 
// create a method to add Task
addTasks(name,description,assignedTo,dueDate,status){
   
    const task = {
        id : this.currentId++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: status
      

    };
    this.tasks.push(task);
    // console.log(task);
    // console.log(task.dueDate);
    
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
        console.log(task.dueDate);

        //  formate date
        const date = new Date(task.dueDate);

        // console.log(date);
        // console.log(task.status);

        const formattedDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+ date.getFullYear();
         
        // create taskHtml to store current html task
        const taskHtml = createTaskHtml(task.name,task.description,task.assignedTo,formattedDate,task.status);
        
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
