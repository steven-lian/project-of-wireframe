// select formFieldInput form
const formFieldInput = document.querySelector("#formFieldInput");

//add an onsubmit event listener
formFieldInput.addEventListener("submit",(event) => {

    //prevent default action when submitting form
    event.preventDefault;


    //select input
    const formFieldName = document.querySelector("#formFieldName");
    const formFieldDescription = document.querySelector("#formFieldDescription");
    const formFieldAssigned = document.querySelector("#formFieldAssigned");
    const formFieldDue = document.querySelector("#formFieldDue");
    const errorMessage = document.querySelector("#alertMessage");



    // validation code

    function validFormFieldInput(){
        let name = document.forms["formFieldInput"]["formFieldName"].value;
        if(name===""){
            alert("Name must be filled out");
            return false;
        }

        let description = document.forms["formFieldInput"]["formFieldDescription"].value;
        if(description===""){
            alert("Description must be filled out");
            return false;
        }

        let assigned = document.forms["formFieldInput"]["formFieldAssigned"].value;
        if(assigned===""){
            alert("Assigned must be filled out");
            return false;
        }

        
    };


    // get the value of input

    const name = formFieldName.value;
    const description= formFieldDescription.value;
    const assigned = formFieldAssigned.value;
    const due = formFieldDue.value;

    if(!validFormFieldInput(name,description,assigned,due)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }



});

function validFormFieldInput(data){
    return data !== null && data !== '';
}