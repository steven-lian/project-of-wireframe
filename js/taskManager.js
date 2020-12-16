// Create a TaskManager class


class TaskManager {
    
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }


// 
// create a method to add Task
addTasks(name,description,assignedTo,dueDate,status){
    this.currentId += 1;
    const task = {
        id : this.currentid++,
        name: name,
        description: description,
        assignedTo : assignedTo,
        dueDate: dueDate,
        status: status


    };
    this.tasks.push(task);

}
}
