function add (numb1, numb2) {
    return numb1 + numb2;
}

function subtract (numb1, numb2) {
    return numb1 - numb2;
}

function multiply (numb1, numb2) {
    return numb1 * numb2;
}

function divide (numb1, numb2) {
    return numb1 / numb2;
}

function operate(symbol, numb1, numb2) {
    if (symbol == "+") return add(numb1, numb2);
    else if (symbol == "-") return subtract(numb1, numb2);
    else if (symbol == "*") return multiply(numb1, numb2);
    else if (symbol == "/") return divide(numb1, numb2);
    else if (symbol == "%") return divide(numb1, 100);
}
function calculation (operator) {
    if (operator == "clear") screen.innerHTML = "";
    else if (operator == "+") {
        firstPart = parseFloat(screen.innerHTML);
        operation = "+";
    }
    else if (operator == "-") {
        firstPart = parseFloat(screen.innerHTML);
        operation = "-";
    }  
    else if (operator == "*") {
        firstPart = parseFloat(screen.innerHTML);
        operation = "*";
    } 
    else if (operator == "/") {
        firstPart = parseFloat(screen.innerHTML);
        operation = "/";
    }
    else if (operator == "%") {
        firstPart = parseFloat(screen.innerHTML);
        operation = "%";
    } 
    else if (operator == "ac") {
        let temp = screen.innerHTML;
        let undo = "";
        for (let index = 0; index < temp.length -3; index++) {
            undo += temp[index];
        }
        screen.innerHTML = undo;
    }
    else if (operator == "=") {
        let parts = screen.innerHTML.split(operation);
        secondPart = parseFloat(parts[1]);
        if(operation == "%") screen.innerHTML = firstPart/100;
        if(! isNaN(secondPart)) {
            let result = operate(operation, firstPart, secondPart);
            screen.innerHTML = "" + result;
        }
    } 
}

function getSymbol (id) {
    if(id == "plus") return "+";
    if(id == "minus") return "-";
    if(id == "times") return "*";
    if(id == "divide") return "/";
    if(id == "equal") return "=";
    if(id == "percentage") return "%";
    if(id == "point") return ".";
    else return id;
}
let firstPart = 0;
let secondPart = 0;
let operation = "";

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll('button');
let btn = buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        let symb = getSymbol(button.id);
        if(symb != "=") screen.innerHTML += symb;
        calculation(symb);
    })
});


