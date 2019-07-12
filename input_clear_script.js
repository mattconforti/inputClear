function clearInput() {
    /* TODO: get every input field element
             get either the innerHTML** or textContent of those elements
             set the text to None or empty string
             set the button label to 'cleared'
             when new text is input, set button back to 'clear'
    */
    document.write(document.getElementById("clear_button").innerHTML)
}

var buttonElem = document.getElementById("clear_button");
buttonElem.addEventListener("click", clearInput, false);