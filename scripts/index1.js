let tableRow = Array(); //collection of row elements in a 2-D array
let array;

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

    //adds row input fields dynamically to the table
    for(let i = 2; i < array.length; i++){

        inputIdToShow = array[i];

        //create an input label and input field depending on array[i] value
        if(inputIdToShow == 'priority'){ //needs select tag + label

            $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Priority </label>');
            $("#form-labels-and-input-fields").append('<select id="' + inputIdToShow + '"> <select id="' + inputIdToShow + '"></select> <br>');
            $("#priority").append('"<option value="blank"> </option><option value="low">Low</option> <option value="medium">Medium</option> <option value="high">High</option>"');

        }
        else{ //inputs with selects (priority)

            if(inputIdToShow == "id"){
                //add label tag
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > ID </label>');

                $("#form-labels-and-input-fields").append('<input type"text" id="' + inputIdToShow + '" required> <br>');
                continue; //goes back to the top of the loop
            }
            else if(inputIdToShow == "req_id"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Requirement ID </label>');

            }
            else if(inputIdToShow == "req_descrip"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Requirement Description </label>');
            }
            else if(inputIdToShow == "status"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Status </label>');
            }
            else if(inputIdToShow == "class"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Class/Methods/Functions </label>');
            }
            else if(inputIdToShow == "developer"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Developer(s) </label>');
            }
            else if(inputIdToShow == "use_case_ID"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Use case ID </label>');
            }
            else if(inputIdToShow == "use_case_descrip"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Use case description </label>');
            }
            else if(inputIdToShow == "test_case_ID"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Test case ID </label>');
            }
            else if(inputIdToShow == "test_case_descrip"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Test case description </label>');
            }
            else if(inputIdToShow == "tester"){
                $("#form-labels-and-input-fields").append('<label for="' + inputIdToShow + '" > Tester </label>');
            }

            //Append input field for the user option
            $("#form-labels-and-input-fields").append('<input type"text" id="' + inputIdToShow + '"> <br>');

        }

        //when form submitted, get element by name
        //make row object
        //add row's data to table dt

    }

    //let rowElement = []; //stores all td's of a signle row
  //  let tableRow = [];
    $('#add_row_form').submit(handleAddRowForm);

});

function handleAddRowForm(e) {
  let rowElement = []; //stores all td's of a signle row

  for (let i = 2; i < array.length; i++){
      rowElement[i-2] = document.getElementById(array[i]).value;
      console.log('rowElement:' + rowElement[i-2]);
  }

  tableRow[tableRow.length] = rowElement;
  console.log('tableRow.length after push: ' + tableRow.length);

  console.log('tableRow:' + tableRow);

  //for (let j = 0; j < tableRow.length; j++) {
  //  console.log('tableRow:' + tableRow[j]);
  //}
  e.preventDefault();
}
