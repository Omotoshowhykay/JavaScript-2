// Build a basic arithmetic calculator that perform basic operations like
//  Addition, Subtraction, Multiplication and Division.



function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
        return x * y;
    }

function divide(x, y) {
        return x / y;
}

function modulus(x, y) {
    return x % y;
}


function calculate() {
    var x = parseInt(prompt("Enter first number"));
    var y = parseInt(prompt("Enter second number"));
    var operator = prompt("Enter operator from the list: +, -, *, /,");
    var result = 0;
    switch (operator) {
        case "+":
           result = add(x, y);
           break;
        case "-":
           result = subtract(x, y);
           break;
        case "*":
           result = multiply(x, y);
           break;
        case "/":
           result = divide(x, y);
           break;
        default:
         alert("Please enter a valid operator");
           break;
    }
    alert(result);
}
calculate();



