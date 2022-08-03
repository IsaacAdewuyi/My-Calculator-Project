// This function clear all the values
function clearScreen() {
    document.getElementById("display-box").value = "";
}

// This function display values
function display(value) {
    document.getElementById("display-box").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var x = document.getElementById("display-box").value;
    var y = eval(x);
    document.getElementById("display-box").value = y;
}