$(document).ready(function(){


    array = JSON.parse(sessionStorage.getItem("matrixStorage"));
    //array received from the first page

    console.log("Information sent from first page: ");
    console.log(array); //JSON object with array of information from + length attribute
    console.log(array[0]);

   

    //addding project name and project description to table
    // document.getElementById("project-name-heading").innerText += array[0];
    // document.getElementById("project-description-heading").innerText += array[1];

    // //hide all form fields until we know which ones the user selected
    // formDiv = document.getElementById("form-labels-and-input-fields");

    // const formLabels =  document.getElementById("form-labels-and-input-fields").getElementsByTagName("label");

    // for(let i = 0; i < formLabels.length; i++){
    //     formLabels[i].setAttribute('hidden', true);
    // }

    // const formInputFields = document.getElementById("form-labels-and-input-fields").getElementsByTagName("input");

    // for(let i = 0; i < formInputFields.length; i++){
    //     formInputFields[i].setAttribute('hidden', true);
    // }

    // const formSelectFields = document.getElementById("form-labels-and-input-fields").getElementsByTagName("select");

    // for(let i = 0; i < formSelectFields.length; i++){
    //     formSelectFields[i].setAttribute('hidden', true);
    // }

    // const commentSection = document.getElementById("form-labels-and-input-fields").getElementsById("textarea");
    // commentSection.setAttribute('hidden', true); //fix -> hide comment section


    console.log(array.length);
    inputToshow = "";
    //show all input fields and labels that user selected
    for(i = 2; i < array.length; i++){

        inputToShow = array[i];

        //create an input label and input field depending on array[i] value
    }
    



});