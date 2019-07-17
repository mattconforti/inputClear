function clearInput() {
    /* TODO: make the button non-clickable upon being cleared
             when new text is input, set button back to 'clear' and make clickable
    */
    let inputElems = document.getElementsByClassName("usr_in");  // get each input element
    for (var i = 0; i < inputElems.length; i++) {
        inputElems[i].value = "";  // set this elems value to empty string
    }
}

function changeButton() {
    document.getElementById("clear_button").textContent = "cleared";
}

var buttonElem = document.getElementById("clear_button");
buttonElem.addEventListener("click", clearInput, false);  // clearInput on button click
buttonElem.addEventListener("click", changeButton, false);  // changeButton on button click