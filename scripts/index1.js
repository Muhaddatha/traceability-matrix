let tableRow = Array(); //collection of row elements in a 2-D array
let pageOneInputrray;
let firstExport = true;

let rowID = 0; //global variable to keep track of row ids that are auto incremented

$(document).ready(function() {


    pageOneInputrray = JSON.parse(sessionStorage.getItem("matrixStorage"));
    //pageOneInputrray received from the first page

    console.log("Information sent from first page: ");
    console.log(pageOneInputrray); //JSON object with array of information from + length attribute
    console.log(pageOneInputrray[0]);



    //addding project name and project description to table
    document.getElementById("editable-project-name").innerText = pageOneInputrray[0];
    document.getElementById("editable-project-description").innerText = pageOneInputrray[1];




    console.log(pageOneInputrray.length);
    let inputIdToShow;

    let formDiv = $("#form-labels-and-input-fields"); //gets element by ID

    //adds row input fields dynamically to the form
    for(let i = 3; i < pageOneInputrray.length; i++){

        inputIdToShow = pageOneInputrray[i];

        //create an input label and input field depending on pageOneInputrray[i] value
        if(inputIdToShow == 'priority'){ //needs select tag + label

            $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Priority: </label>');
            $("#form-labels-and-input-fields").append('<select id="' + inputIdToShow + '"> <select id="' + inputIdToShow + '"></select> <br>');
            $("#priority").append('"<option value="Custom">Custom</option><option value="low">Low</option> <option value="medium">Medium</option> <option value="high">High</option>"');

            $("#headingsRow").append('<th>Priority</th>')
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
                $("#headingsRow").append('<th>Requirement Description</th>')
            }
            else if(inputIdToShow == "status"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Status: </label>');
                $("#headingsRow").append('<th>Status</th>')
            }
            else if(inputIdToShow == "class"){
                $("#form-labels-and-input-fields").append('<label id="classmethfunc" class="aligningSecond" for="' + inputIdToShow + '" > Class/Methods/Functions: </label>');
                $("#headingsRow").append('<th>Class/Methods/Functions</th>')
            }
            else if(inputIdToShow == "developer"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Developer(s): </label>');
                $("#headingsRow").append('<th>Developers(s)</th>')
            }
            else if(inputIdToShow == "use_case_ID"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Use case ID: </label>');
                $("#headingsRow").append('<th>Use Case ID</th>')
            }
            else if(inputIdToShow == "use_case_descrip"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Use case description: </label>');
                $("#headingsRow").append('<th>Use Case Description</th>')
            }
            else if(inputIdToShow == "test_case_ID"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Test case ID: </label>');
                $("#headingsRow").append('<th>Test Case ID</th>')
            }
            else if(inputIdToShow == "test_case_descrip"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Test case description: </label>');
                $("#headingsRow").append('<th>Test Case Description</th>')
            }
            else if(inputIdToShow == "tester"){
                $("#form-labels-and-input-fields").append('<label class="aligningSecond" for="' + inputIdToShow + '" > Tester: </label>');
                $("#headingsRow").append('<th>Tester</th>')
            }

            //Append input field for the user option
            $("#form-labels-and-input-fields").append('<input type="text" id="' + inputIdToShow + '"> <br>');

        }

        //when form submitted, get element by name
        //make row object
        //add row's data to table dt

    }

    $("#headingsRow").append('<th>Delete</th>')

    
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

    for(let i = 3; i < pageOneInputrray.length; i++){
        rowElement[i-2] = document.getElementById(pageOneInputrray[i]).value;
        console.log('rowElement:' + rowElement[i-2]);
    }

    $("tbody").append("<tr id='" +  rowID + "' class='hide'></tr>");
    for(let i = 1; i < rowElement.length; i++) {
      $("#" + rowID).append("<td class='pt-3-half' contenteditable='true'>" + rowElement[i] + "</td>");
    }
    $("#" + rowID).append("<input type='button' class='aDeleteButton' id=" + rowID + " value='Delete' onclick='deleteRowHandler(this.id)'>");

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
    //raise alerts if project name and project description are empty? 
    //raise alerts if no rows are in the table?
    //add test cases to test plan document?
    //then call 
    //updateTableRowArray function again or add event listener to export.csv button???

  //let csv = 'Name,Title\n';
  let csv = pageOneInputrray[0] + ',' + pageOneInputrray[1] + '\n'; // Adds Project name and description

  let tableHeadingsArray = document.getElementById('headingsRow').getElementsByTagName('th');
  for(let i = 0; i < tableHeadingsArray.length - 1; i++) {
    console.log("tableHeadingsArray: " + tableHeadingsArray[i].innerText);
    csv += tableHeadingsArray[i].innerText; // Adds headings
    if (i == tableHeadingsArray.length - 2) {
      csv += '\n';
    }
    else {
      csv += ',';
    }
  }
  console.log("csv after headings: " + csv);
  let rowTemp;
  tableRow.forEach(function(row) {
          if (row.length) {
            rowTemp = row;
            if (firstExport) {
              rowTemp.shift();
            }
            csv += rowTemp.join(',');
            csv += "\n";
          }
  });

  firstExport = false;

  console.log("csv after table rows data:" + csv);
  let hiddenLink = document.createElement('a');
  hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenLink.target = '_blank';
  hiddenLink.download = 'Traceability_matrix.csv';
  hiddenLink.click();
}



//This internal function updates the tableRow array based on the edits that are made to each cell
//It updates the project name and project description too
//It loops through each data row in table
function updateTableRowArray(){

    //structure of pageOneInputrray
    //[0]: Project name
    //[1]: Project Description
    //[2]: "ID"
    //[3-length] : checkbox options pageOneInputrray


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


    if(pageOneInputrray[0] != updatedProjectName){
        //if new project name is different from old project name, update it
        console.log("Project name changed from: " + pageOneInputrray[0] + " to: " + updatedProjectName);
        console.log("updating the project name...");
        pageOneInputrray[0] = updatedProjectName;
        console.log("pageOneInputrray[0]: " + pageOneInputrray[0]);
    }
    else{
        //if project name hasn't changed, do nothing
        console.log("Project name has not changed.");
    }

    if(pageOneInputrray[1] != updatedProjectDescription){
        //if new project description is different from old project name, update it
        console.log("Project description changed from: " + pageOneInputrray[1] + " to: " + updatedProjectDescription);
        console.log("updating the project description...");
        pageOneInputrray[1] = updatedProjectDescription;
        console.log("pageOneInputrray[1]: " + pageOneInputrray[1]);
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
