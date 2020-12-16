// import TaskManager from './taskManager';
const taskManager = new TaskManager(0);
console.log(taskManager.tasks);

const taskManager2 = new TaskManager(0);
console.log(taskManager2.addTasks);

// const newTaskForm = document.querySelector('#newTaskForm');

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
        let name = document.forms["formFieldInput"]["formFieldName"].value;
        if(name===""){
            errorMessage.innerHTML += "Invalid name input";
           
        }

        let description = document.forms["formFieldInput"]["formFieldDescription"].value;
        if(description===""){
            errorMessage.innerHTML += "Invalid description input";
           
        }

        let assigned = document.forms["formFieldInput"]["formFieldAssigned"].value;
        if(assigned===""){
            errorMessage.innerHTML += "Invalid assigned input";
         
        }

        let due = document.forms["formFieldInput"]["formFieldDue"].value;
        if(due===""){
            errorMessage.innerHTML += "Invalid due input";
            
        }

        let status = document.forms["formFieldInput"]["formFieldStatus"].value;
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

    if(!validFormFieldInput(name,description,assigned,due,status)){
        
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }



});

function validFormFieldInput(data){
    return data !== null && data !== '';
}





