function clearInput() {
    /* TODO: get every input field element
             get either the innerHTML** or textContent of those elements
             set the text to None or empty string
             make the button non-clickable
             when new text is input, set button back to 'clear' and make clickable
    */
    let inputElems = document.getElementsByClassName("usr_in");
    for (let item of inputElems) {  // for item of...
        item.textContent = ""
    }
    document.getElementById("clear_button").textContent = "cleared";
}

var buttonElem = document.getElementById("clear_button");
buttonElem.addEventListener("click", clearInput, false);