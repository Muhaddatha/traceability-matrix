$(document).ready(function(){ //waits until document is fully loaded

  //create array to store information that will be passed to the next page
  let passedArray = [];


  $("#form").submit(function(e){ //is executed everytime the submit button is clicked to submit the form

    console.log("Continue button clicked! \nName and description are filled out.");


    //checks to see if at-least one checkbox is selected
    if(!$(".check_1 input").is(' :checked')){
      e.preventDefault();

      alert("You must have at least one checkbox (other than Requirement ID) checked.");
      console.log("Error: User didn't select any checkboxes.");

    }
    else{ //if at-least one checkbox is selected
      console.log("inside function that handles continue button being clicked");

      console.log("All validations passed.");

      
      //have already passed validation check so they are not empty
      const projectName = document.getElementById("projectName").value;
      const projectDescription = document.getElementById("projectDescription").value;


      console.log("Putting project name and description into array.");
      //set the first two indexes of the array to project name and project description
      passedArray[0] = projectName;
      passedArray[1] = projectDescription;
      passedArray[2] = "ID"; //Since project ID is not option, we have it hardcoded as a row element. In the second page, we'll auto increment the ID everytime a row is added. We'll decrement the iD everytime a row is removed. So, the selected checkbox ids start from index 3 of the passed array

     
      console.log("Project name inputted (passedArray[0]): " + passedArray[0]);
      console.log("Project description inputted(passedArray[1]): " + passedArray[1]);

      const checkboxes = document.getElementsByName("check"); //get all the ckecbox inputs

      let counter = 3; //helps put checkbox id's in the right position in the array

      console.log("Total length of checkboxes: " + checkboxes.length)
      for (let i = 0; i < checkboxes.length; i++) {
        //putting the id of checkboxes selected by the user into the passedArray
        if (checkboxes[i].checked) {
  
          passedArray[counter] = checkboxes[i].id;
          console.log("Id of checkbox: " + checkboxes[i].id);

          console.log("Putting the ckeckbox id (passedArray[" + counter + "]):  " + passedArray[counter] + " into the passedArray");

          counter++;
        }
      }
      
    }

    //send array to next page via session storage
    sessionStorage.setItem("matrixStorage", JSON.stringify(passedArray));

  });


});
