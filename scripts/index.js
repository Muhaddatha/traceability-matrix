$(document).ready(function(){ //waits until document is fully loaded

  $("#form").submit(function(e){ //is executed everytime the submit button is clicked to submit the form

    console.log("Continue button clicked! \nName and description are filled out.");


    //checks to see if at-least one checkbox is selected
    if(!$("input").is(' :checked')){
      e.preventDefault();

      alert("You must have at least one checkbox checked");
      console.log("Error: User didn't select any checkboxes.");

    }
    else{ //if at-least one checkbox is selected
      console.log("inside function that handles continue button being clicked");

      console.log("All validations passed.");

      //create array to store information that will be passed to the next page
      let passedArray = [];

      //have already passed validation check so they are not empty
      const projectName = document.getElementById("projectName").value;
      const projectDescription = document.getElementById("projectDescription").value;


      console.log("Putting project name and description into array.");
      //set the first two indexes of the array to project name and project description
      passedArray[0] = projectName;
      passedArray[1] = projectDescription;

     
      console.log("Project name inputted (passedArray[0]): " + passedArray[0]);
      console.log("Project description inputted(passedArray[0]): " + passedArray[1]);

      const checkboxes = document.getElementsByName("check"); //get all the ckecbox inputs

      let counter = 2; //helps put checkbox id's in the right position in the array

      for (let i = 0; i < checkboxes.length; i++) {
        //putting the id of checkboxes selected by the user into the passedArray
        if (checkboxes[i].checked) {
  
          passedArray[counter] = checkboxes[i].id;

          console.log("Putting the ckeckbox id (passedArray[" + counter + "]):  " + passedArray[counter] + " into the passedArray");

          counter++;
        }
      }
      
    }

    //send array to next page via session storage/cookies/?

  });


});
