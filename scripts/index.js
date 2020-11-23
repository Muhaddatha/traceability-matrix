function handleContinue() {

  let passedArray = [];

  const projectName = document.getElementById("projectName");
  const projectDescription = document.getElementById("projectDescription");

  if (projectName.value === "") {
    alert("The project name field is empty and must be filled out");
  }
  else if (projectDescription.value === "") {
    alert("The project description field is empty and must be filled out");
  }
  else {

    passedArray[0] = projectName.value;
    passedArray[1] = projectDescription.value;

    const checkboxes = document.getElementsByName("check");

    let counter = 2;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        passedArray[counter] = checkboxes[i].id
        counter++;
      }
    }
    if(passedArray.length === 2) {
      alert("You must have at least one checkbox checked");
    }
    else {
      sessionStorage.setItem(matrixStorage, passedArray);
      window.location.href = "../index1.html";
    }
  }
}



window.addEventListener('load', function() {
  let continueBtn = document.getElementById("continueButton");
  continueBtn.addEventListener('click', handleContinue);
});
