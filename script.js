let firstNum = "", op = "", secondNum = "", is_op = false;

const screen = document.querySelector('.screen');
const digits = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-op]');
const Equals = document.querySelector('.equal')

digits.forEach((item) => item.addEventListener('click', digitsEventHandler));
operators.forEach((item) => item.addEventListener('click', operatorEventHandler))
Equals.addEventListener('click', evaluate);

function digitsEventHandler() {
    if(this.textContent == "AC") {
        clear();
        return
    };
    if(is_op === true) {
        secondNum += this.textContent;
        console.log(secondNum);
    }else{
        firstNum += this.textContent;
        console.log(firstNum);
    }
    screen.textContent += this.textContent;
}

function operatorEventHandler() {
    if(is_op === true && !secondNum) return;
    
    if(is_op === true && secondNum) {
        is_op = false;
        evaluate();
        op = this.textContent;
        
    }
    op = this.textContent;
    screen.textContent += " " + this.textContent + " ";
    is_op = true;
}

function add(a, b) {
    return +a + +b;
}

function substract(a, b){
    return +a - +b;
}

function multiply(a, b){
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    return num1 * num2
}

function divide(a, b) {
    return (b == "0") ? "You can\'t divide by 0" : +a / +b;
}

function clear() {
    firstNum = "";
    op = "";
    secondNum = "";
    screen.textContent = "";
    is_op = false;
}

function evaluate(){
    if(!(firstNum && op && secondNum)) return;
    let result = operate(op, firstNum, secondNum)
    screen.textContent = result;
    firstNum = result;
    secondNum = "";
    op = "";
    is_op = false;
}

function operate(operator, firstNum, secondNum){
    switch (operator) {
        case "+":
            return add(firstNum, secondNum)
        case "-":
            return substract(firstNum, secondNum)
        case "x":
            return multiply(firstNum, secondNum)
        case "/":
            return divide(firstNum, secondNum)
        default:
            return null;
    }
    
}

