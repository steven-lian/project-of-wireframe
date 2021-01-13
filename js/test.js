const TaskManager = require('./taskManager.js');
const assert = require('assert');
console.log(TaskManager);
describe("TaskManager", () => {
    // Test One: A string explanation of what we're testing
    // also an older function! How do we convert it to ES6 fat arrow notation?
    it("should add a task", () => {
      const taskManager = new TaskManager(0);
      let len = taskManager.tasks.length;
      console.log(taskManager);
      taskManager.addTasks();
      
        assert.ok(len < taskManager.tasks.length);
      
    })

    it("should delete a task",() => {
           const taskManager = new TaskManager(0);
              taskManager.addTasks();
           let len = taskManager.tasks.length;

           taskManager.deleteTask(0)
      
           assert.ok(len > taskManager.tasks.length);
      
        
       })

       
    
  })