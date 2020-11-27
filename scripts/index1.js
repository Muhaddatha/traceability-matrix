let tableRow = Array(); //collection of row elements in a 2-D array
let array;
let firstExport = true;

let rowID = 0; //global variable to keep track of row ids that are auto incremented

$(document).ready(function() {


    array = JSON.parse(sessionStorage.getItem("matrixStorage"));
    //array received from the first page

    console.log("Information sent from first page: ");
    console.log(array); //JSON object with array of information from + length attribute
    console.log(array[0]);



    //addding project name and project description to table
    document.getElementById("project-name-heading").innerText += array[0];
    document.getElementById("project-description-heading").innerText += array[1];




    console.log(array.length);
    let inputIdToShow;

    let formDiv = $("#form-labels-and-input-fields"); //gets element by ID

    //adds row input fields dynamically to the form
    for(let i = 3; i < array.length; i++){

        inputIdToShow = array[i];

        //create an input label and input field depending on array[i] value
        if(inputIdToShow == 'priority'){ //needs select tag + label

            $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Priority </label>');
            $("#form-labels-and-input-fields").append('<select id="' + inputIdToShow + '"> <select id="' + inputIdToShow + '"></select> <br>');
            $("#priority").append('"<option value="blank"> </option><option value="low">Low</option> <option value="medium">Medium</option> <option value="high">High</option>"');

            $("#headingsRow").append('<th>Priority</th>')
        }
        else{ //inputs with selects (priority)

            // if(inputIdToShow == "id"){
            //     //add label tag
            //     $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > ID </label>');

            //     $("#form-labels-and-input-fields").append('<input type"text" id="' + inputIdToShow + '" required> <br>');
            //     continue; //goes back to the top of the loop
            // }
            if(inputIdToShow == "req_id"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Requirement ID </label>');
                $("#headingsRow").append('<th>Requirement ID</th>')
            }
            else if(inputIdToShow == "req_descrip"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Requirement Description </label>');
                $("#headingsRow").append('<th>Requirement Description</th>')
            }
            else if(inputIdToShow == "status"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Status </label>');
                $("#headingsRow").append('<th>Status</th>')
            }
            else if(inputIdToShow == "class"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Class/Methods/Functions </label>');
                $("#headingsRow").append('<th>Class/Methods/Functions</th>')
            }
            else if(inputIdToShow == "developer"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Developer(s) </label>');
                $("#headingsRow").append('<th>Developers(s)</th>')
            }
            else if(inputIdToShow == "use_case_ID"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Use case ID </label>');
                $("#headingsRow").append('<th>Use Case ID</th>')
            }
            else if(inputIdToShow == "use_case_descrip"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Use case description </label>');
                $("#headingsRow").append('<th>Use Case Description</th>')
            }
            else if(inputIdToShow == "test_case_ID"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Test case ID </label>');
                $("#headingsRow").append('<th>Test Case ID</th>')
            }
            else if(inputIdToShow == "test_case_descrip"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Test case description </label>');
                $("#headingsRow").append('<th>Test Case Description</th>')
            }
            else if(inputIdToShow == "tester"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Tester </label>');
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

    //let rowElement = []; //stores all td's of a signle row
  //  let tableRow = [];
    $('#add_row_form').submit(handleAddRowForm);
    console.log("Line 96 after submit form event");

});

function handleAddRowForm(e) {

    e.preventDefault();
    let rowElement = []; //stores all td's of a signle row
    rowID++; //since we are adding a new row, the ID number is increasing

    rowElement[0] = rowID; //The first index of rowElement stores the rowID that is autoincremented everytine 'Add!' button is clicked

    for(let i = 3; i < array.length; i++){
        rowElement[i-2] = document.getElementById(array[i]).value;
        console.log('rowElement:' + rowElement[i-2]);
    }

    $("tbody").append("<tr id='row" + rowID + "' class='hide'></tr>");
    for(let i = 1; i < rowElement.length; i++) {
      $("#row" + rowID).append("<td class='pt-3-half' contenteditable='true'>" + rowElement[i] + "</td>");
    }
    $("#row" + rowID).append("<input type='button' id=" + rowID + " value='Delete!' onclick='deleteRowHandler(this.id)'>");

    //reset form values
    console.log("Resetting the form");
    document.getElementById("add_row_form").reset();


    tableRow[tableRow.length] = rowElement;
    console.log('tableRow.length after push: ' + tableRow.length);

    console.log('tableRow:' + tableRow);

}


function resetForm(){
    //reset form here since 'add!' button clicked
    console.log("restting form values");
    for(let i = 2; i < array.length; i++){
        document.getElementById(array[i]).value = "";
    }

}

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
    $('#row' + idOfRowToBeDeleted).remove();
    console.log("Row removed from table");

}


//This function deletes all the table rows
function clearTableHandler(){
    console.log("Clearing table rows");
    $("tbody").empty(); //clears table rows
    //still need to clear the rows from tableRow array
}


function exportCSV() {
  var data = [
     ['Foo', 'programmer'],
     ['Bar', 'bus driver'],
     ['Moo', 'Reindeer Hunter']
  ];

  //let csv = 'Name,Title\n';
  let csv = array[0] + ',' + array[1] + '\n'; // Adds Project name and description

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
