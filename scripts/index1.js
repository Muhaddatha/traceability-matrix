let tableRow = Array(); //collection of row elements in a 2-D array
let pageOneInputArray;
let firstExport = true;

let rowID = 0; //global variable to keep track of row ids that are auto incremented

$(document).ready(function() {


    //warns about browser back button
    window.onhashchange = function(evt){

        // alert("Warning: your traceability matrix will be cleared if you go back.\nDo you want to continue?");
        if (typeof evt == 'undefined') {
            evt = window.event;
        }

    }





    pageOneInputArray = JSON.parse(sessionStorage.getItem("matrixStorage"));
    //pageOneInputArray received from the first page

    console.log("Information sent from first page: ");
    console.log(pageOneInputArray); //JSON object with array of information from + length attribute
    console.log(pageOneInputArray[0]);



    //addding project name and project description to table
    document.getElementById("editable-project-name").innerText = pageOneInputArray[0];
    document.getElementById("editable-project-description").innerText = pageOneInputArray[1];




    console.log(pageOneInputArray.length);
    let inputIdToShow;

    let formDiv = $("#form-labels-and-input-fields"); //gets element by ID

    //adds row input fields dynamically to the form
    for(let i = 3; i < pageOneInputArray.length; i++){

        inputIdToShow = pageOneInputArray[i];

        //create an input label and input field depending on pageOneInputArray[i] value
        if(inputIdToShow == 'priority'){ //needs select tag + label

            $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Priority: </label>');
            $("#form-labels-and-input-fields").append('<select id="' + inputIdToShow + '"> <select id="' + inputIdToShow + '"></select> <br>');
            $("#priority").append('"<option value="Custom">Custom</option><option value="Low">Low</option> <option value="Medium">Medium</option> <option value="High">High</option>"');

            $("#headingsRow").append('<th>Priority</th>');
        }
        else{
            if(inputIdToShow == "req_id"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Requirement ID: </label>');
                $("#headingsRow").append('<th>Requirement ID</th>');
                $("#form-labels-and-input-fields").append('<input type="text" id="' + inputIdToShow + '" required> <br>');
                continue;
            }
            else if(inputIdToShow == "req_descrip"){
                $("#form-labels-and-input-fields").append('<label id="req_des" class="aligningSecond" for="' + inputIdToShow + '" > Requirement Description: </label>');
                $("#headingsRow").append('<th>Requirement Description</th>');
            }
            else if(inputIdToShow == "status"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Status: </label>');
                $("#headingsRow").append('<th>Status</th>');
            }
            else if(inputIdToShow == "class"){
                $("#form-labels-and-input-fields").append('<label id="classmethfunc" class="aligningSecond" for="' + inputIdToShow + '" > Class/Methods/Functions: </label>');
                $("#headingsRow").append('<th>Class/Methods/Functions</th>');
            }
            else if(inputIdToShow == "developer"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Developer(s): </label>');
                $("#headingsRow").append('<th>Developers(s)</th>');
            }
            else if(inputIdToShow == "use_case_ID"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Use case ID: </label>');
                $("#headingsRow").append('<th>Use Case ID</th>');
            }
            else if(inputIdToShow == "use_case_descrip"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Use case description: </label>');
                $("#headingsRow").append('<th>Use Case Description</th>');
            }
            else if(inputIdToShow == "test_case_ID"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Test case ID: </label>');
                $("#headingsRow").append('<th>Test Case ID</th>');
            }
            else if(inputIdToShow == "test_case_descrip"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Test case description: </label>');
                $("#headingsRow").append('<th>Test Case Description</th>');
            }
            else if(inputIdToShow == "tester"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Tester: </label>');
                $("#headingsRow").append('<th>Tester</th>');
            }

            //Append input field for the user option
            $("#form-labels-and-input-fields").append('<input type="text" id="' + inputIdToShow + '"> <br>');

        }

    }

    $("#headingsRow").append('<th>Delete</th>');


    //Whenever add row form is submitted, call the handler
    $('#add_row_form').submit(handleAddRowForm);
    console.log("Line 96 after submit form event");

});


//This function is called whenever the add row form is submitted
//Updates the DOM by adding a tr element
//Updates tableRow array by inserting the new rows in the last index
function handleAddRowForm(e) {

    e.preventDefault();
    let rowElement = []; //stores all td's of a signle row
    rowID++; //since we are adding a new row, the ID number is increasing

    rowElement[0] = rowID; //The first index of rowElement stores the rowID that is autoincremented everytine 'Add!' button is clicked

    for(let i = 3; i < pageOneInputArray.length; i++){
        rowElement[i-2] = document.getElementById(pageOneInputArray[i]).value;
        console.log('rowElement:' + rowElement[i-2]);
    }

    $("tbody").append("<tr id='" +  rowID + "' class='hide'></tr>");
    for(let i = 1; i < rowElement.length; i++) {
      $("#" + rowID).append("<td class='pt-3-half' contenteditable='true'>" + rowElement[i] + "</td>");
    }
    $("#" + rowID).append("<td><input type='button' class='aDeleteButton' id=" + rowID + " value='Delete' onclick='deleteRowHandler(this.id)'></td>");

    //reset form values
    console.log("Resetting the form");
    document.getElementById("add_row_form").reset();


    tableRow[tableRow.length] = rowElement;
    console.log('tableRow.length after push: ' + tableRow.length);

    console.log('tableRow:' + tableRow);

}


//clears form so that user can put in new row information
function resetForm(){
    //reset form here since 'add!' button clicked
    console.log("restting form values");
    for(let i = 2; i < array.length; i++){
        document.getElementById(array[i]).value = "";
    }

}


//This function removes a row information from the table and the tableRow array
function deleteRowHandler(idOfRowToBeDeleted){

    console.log("Inside delete row function");
    console.log("Id of row to be deleted: " + idOfRowToBeDeleted);

    console.log("tableRow before removing a row: " + tableRow);
    console.log("Table row to be deleted: " + tableRow[idOfRowToBeDeleted - 1]);
    //step1: delete row from array
    tableRow[idOfRowToBeDeleted - 1] = [];
    console.log("Table row to be deleted (after deletion): " + tableRow[idOfRowToBeDeleted - 1]);
    console.log("tableRow after removing a row: " + tableRow);
    //row removed from tableRow array and initialized to []

    //step2: delete tr from matrix
    $('#' + idOfRowToBeDeleted).remove();
    console.log("Row removed from table");

}


//This function deletes all the table rows
//Precondition: Matrix has atleast one row
function clearTableHandler(){
    console.log("Clearing table rows");
    let choice = confirm("Warning: your traceability matrix will be cleared if you proceed.\nDo you want to continue?");
    if (choice) {
        $("#theMatrix tbody").empty(); //clears table rows
        //still need to clear the rows from tableRow array
        while(tableRow.length > 0){
            tableRow.pop();
        }
        console.log("tableRow array after clearing it: " + tableRow);
        rowID = 0;
    }
}


//function that puts all the table information into a csv file to be exported
function exportCSV() {

    //call function that updates the tableRow array
    updateTableRowArray();

  let csvFile = '\"Project name: ' + pageOneInputArray[0] + '\",' + '\"Project description: ' + pageOneInputArray[1] + '\"' +  '\n'; // Adds Project name and description

  let tableHeadingsArray = document.getElementById('headingsRow').getElementsByTagName('th');
  for(let i = 0; i < tableHeadingsArray.length - 1; i++) {
    console.log("tableHeadingsArray: " + tableHeadingsArray[i].innerText);
    csvFile += tableHeadingsArray[i].innerText; // Adds headings
    if (i == tableHeadingsArray.length - 2) {
      csvFile += '\n';
    }
    else {
      csvFile += ',';
    }
  }
  console.log("csvFile after headings: " + csvFile);
  let rowTemp = [];
  tableRow.forEach(function(row) {
          if (row.length) {
            for(let i = 1; i < row.length; i++) {
              rowTemp[i - 1] = '\"' + row[i] + '\"';
            }
            csvFile += rowTemp.join(',');
            csvFile += "\n";
          }
  });



  console.log("csvFile after table rows data:" + csvFile);
  let csvLink = document.createElement('a');
  csvLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFile);
  csvLink.target = '_blank';
  csvLink.download = 'traceability_matrix.csv';
  csvLink.click();
}



//This internal function updates the tableRow array based on the edits that are made to each cell
//It updates the project name and project description too
//It loops through each data row in table
function updateTableRowArray(){

    //structure of pageOneInputArray
    //[0]: Project name
    //[1]: Project Description
    //[2]: "ID"
    //[3-length] : checkbox options pageOneInputArray


    //structure of tableRow array
    //[0]: rowID
    //[1-length]: value for checkboxes

    console.log("Inside updateTableRowArray function.");
    let updatedProjectName = document.getElementById("editable-project-name").innerText;
    let updatedProjectDescription = document.getElementById("editable-project-description").innerText;
    // console.log("Using innerText: " + updatedProjectName.innerText);
    // console.log("Using value: " + updatedProjectName.value);
    // console.log("Using textContent: " + updatedProjectName.textContent);
    // console.log("Using innerHTML: " + updatedProjectName.innerHTML);


    if(pageOneInputArray[0] != updatedProjectName){
        //if new project name is different from old project name, update it
        console.log("Project name changed from: " + pageOneInputArray[0] + " to: " + updatedProjectName);
        console.log("updating the project name...");
        pageOneInputArray[0] = updatedProjectName;
        console.log("pageOneInputArray[0]: " + pageOneInputArray[0]);
    }
    else{
        //if project name hasn't changed, do nothing
        console.log("Project name has not changed.");
    }

    if(pageOneInputArray[1] != updatedProjectDescription){
        //if new project description is different from old project name, update it
        console.log("Project description changed from: " + pageOneInputArray[1] + " to: " + updatedProjectDescription);
        console.log("updating the project description...");
        pageOneInputArray[1] = updatedProjectDescription;
        console.log("pageOneInputArray[1]: " + pageOneInputArray[1]);
    }
    else{
        //if project description hasn't changed, do nothing
        console.log("Project description has not changed.");
    }


    //update table row information
    //1: Check to see if there are any table rows
    let HTMLTableRows = document.getElementsByClassName("hide");

    if(HTMLTableRows.length == 0){
        console.log("No table rows exist in the table.");
    }
    console.log("All user-made HTML table rows: ");


    for(let i = 0; i < HTMLTableRows.length; i++){

        console.log("HTMLTableRows[" + i + "].innerHTML: " + HTMLTableRows[i].innerHTML);
        console.log("HTMLTableRows[" + i + "].innerText: " + HTMLTableRows[i].innerText);

        let rowId = HTMLTableRows[i].id; //rowId

        let rowInformation = HTMLTableRows[i].getElementsByTagName("td");
        //arry of td in a row
        console.log(rowInformation);
        //returns a string of the td's in this row

        let indexOfRowInTableRowArray = 0;
        for(let k = 0; k < tableRow.length; k++){

            if(tableRow[k].length > 0 && tableRow[k][0] == rowId){
                //found index of row in tableRow array
                console.log("Index of row with the id of " + rowId + " in the rowTable array is :" + k);
                indexOfRowInTableRowArray = k;
                k = tableRow.length;
            }
        }

        for(let j = 0; j < rowInformation.length; j++){

            //updating a particular row that the user has editted
            if(tableRow[indexOfRowInTableRowArray][j + 1] != rowInformation[j].innerText){
                console.log("Replacing tableRow[" + indexOfRowInTableRowArray + "][" + (j + 1) + "]:" + tableRow[indexOfRowInTableRowArray][j + 1] + " with rowinformation[" + j + "]: " + rowInformation[j].innerText);
                tableRow[indexOfRowInTableRowArray][j + 1] = rowInformation[j].innerText;
            }
            else{
                //no change necessary
                console.log("Equal values in tableRow[" + indexOfRowInTableRowArray + "][" + (j + 1) + "]: " + tableRow[indexOfRowInTableRowArray][j + 1] + " and rowinformation[" + j + "]: " + rowInformation[j].innerText);
            }

        }


    }
}


function handleGoBack() {
  let choice = confirm("Warning: your traceability matrix will be cleared if you go back.\nDo you want to continue?");
  if (choice) {
    location.href='index.html';
  }
}

function handleBackAndRefresh(){
    if(window.event){
        if(window.event.clientX < 40 && window.event.clientY < 0){
            alert("Browser back button is clicked...");
        }
        else{
            alert("Browser refresh button is clicked...");
        }
    }
    else{
        if(event.currentTarget.performance.navigation.type == 1){
              alert("Browser refresh button is clicked...");
         }
         if(event.currentTarget.performance.navigation.type == 2)
        {
              alert("Browser back button is clicked...");
        }
     }
}
