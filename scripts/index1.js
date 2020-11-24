$(document).ready(function(){


    array = JSON.parse(sessionStorage.getItem("matrixStorage"));
    //array received from the first page

    console.log("Information sent from first page: ");
    console.log(array); //JSON object with array of information from + length attribute
    console.log(array[0]);

   

    //addding project name and project description to table
    document.getElementById("project-name-heading").innerText += array[0];
    document.getElementById("project-description-heading").innerText += array[1];

    //hide all form fields until we know which ones the user selected
    //document.getElementById("form-labels-and-input-fields");
    
    


});