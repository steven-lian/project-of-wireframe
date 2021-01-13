// -------------- for terminal 
  
const TaskManager = require('./taskManager.js');
const assert = require('assert');


// Create a test suite (group) called Math
describe("TaskManager", () => {
    // Test One: A string explanation of what we're testing
    // also an older function! How do we convert it to ES6 fat arrow notation?
    it("should add a task", () => {
      const taskManager = new TaskManager(0);
     
      let len = taskManager.tasks.length;
      
      taskManager.addTasks();
      
        assert.ok(len < taskManager.tasks.length);
      
    })

    it("should delete a task", ()=>{
        const taskManager = new TaskManager(0);
        taskManager.addTasks();
        console.log(taskManager);
        let len = taskManager.tasks.length;
      
        
        taskManager.deleteTask(0);
        console.log(taskManager);
        
          assert.ok(len > taskManager.tasks.length);
    })
    
    it("should get a task by id", ()=>{
        const taskManager = new TaskManager(0);
        taskManager.addTasks();
        taskManager.addTasks();
        console.log(taskManager);
        let x = taskManager.tasks[1].id;
      
        
       taskManager.getTaskById(1);
        
          assert.ok(x === 1);
    })
})