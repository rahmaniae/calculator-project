//functions for basic math
function add(a, b) {
    return +a + +b;
}

function substract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    return (b == "0") ? "You can\'t divide by 0" : a / b;
}

//variables to update the screen

let firstNum, op, secondNum;

function operate(firstNum, op, secondNum){
    return (op == "+") ? add(firstNum, secondNum) : (op == "-") ? substract(firstNum, secondNum) : (op == "*") ? multiply(firstNum, secondNum) : (op == "/") ? divide(firstNum, secondNum) : "The wrong operator";
}